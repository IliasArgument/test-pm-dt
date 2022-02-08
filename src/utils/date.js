import moment from 'moment';

export const formdDate = (from, to) => {
    let starts = moment(from);
    let ends = moment(to);
    let duration = moment.duration(ends.diff(starts));

    const { _data: { years, months } } = duration;
    if (years && months) {
        return `${years} лет${' '} ${months} мес.`
    }
    else if (months) {
        return ` ${months} мес.`
    } else {
        return ` ${years} лет.`
    }
}
