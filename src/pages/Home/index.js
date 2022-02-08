import React, { useEffect, useState, useCallback } from 'react';
import Cards from '../../components/Cards';

import ToggleSwitch from '../../components/form/ToggleSwitch';
import { filterExperience, filterEmployment, filterEducation } from '../../utils/mockData';
import vectorMenuIcon from '../../assets/menu-icon/vector-menu.png';
import outlineMenuIcon from '../../assets/menu-icon/outline.png';
import filtersMenuIcon from '../../assets/menu-icon/filters.png';
import closeMenuIcon from '../../assets/menu-icon/close.png';
import FilterRange from '../../components/Filter/FilterRange';
import FilterCheckbox from '../../components/Filter/FilterCheckbox';
import HeaderNavigation from '../../components/HeaderNavigation';
import SearchBar from '../../components/SearchBar';
import FilterLanguage from '../../components/Filter/FilterLanguage';
import FilerGender from '../../components/Filter/FilterGender';
import { debounce } from 'lodash';
import Pagination from '../../components/Pagination';
import { getCurrentPage, getFilteredUsersByPhotos } from '../../store/actions';

import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';


const Home = () => {


    const { users, isLoading } = useSelector(state => state);
    const dispatch = useDispatch();

    const [width, setWidth] = useState(null);
    const [age, setAge] = useState([18, 40]);
    const [salary, setSalary] = useState([930, 1070]);
    const [isFilters, setIsFilters] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const onHandleChangeAge = useCallback((values) => (
        setAge(values)
    ), [setAge]);

    const onHandleChangeSalary = useCallback((values) => {
        setSalary(values)
    }, [setSalary]);

    const handleWidthClient = useCallback(() => {
        if (window.innerWidth >= 880) {
            setWidth(true);
            setIsFilters(false)
        }
        else {
            setWidth(false);
        }
    }, [setWidth]);

    useEffect(() => {
        window.addEventListener("resize", debounce(handleWidthClient, 100));
        return () => {
            window.removeEventListener("resize", debounce(handleWidthClient, 100));
        };
    }, [handleWidthClient]);

    const onChangePage = useCallback((page) => {
        dispatch(getCurrentPage(page));
    }, [dispatch]);

    const onToggleChange = useCallback((boolean) => {
        setIsToggle(boolean);
        dispatch(getFilteredUsersByPhotos(boolean));
    }, [isToggle]);

    return (
        <>
            <header>
                <HeaderNavigation />
                <SearchBar width={width} />
            </header>
            <menu>
                <div className="menu__container">
                    <div className="menu__container-title">
                        <h2>Мы подобрали <span className="span-2">451 642</span>резюме </h2>
                        <div className="menu__container-subtitle">
                            <p>Резюме продавец консультант во Всей Украине</p>
                            <div className="menu__container-accordeon">
                                <p className="menu__container-accordeon-text">за все время</p>
                                <img src={vectorMenuIcon} alt={vectorMenuIcon} />
                            </div>
                            {
                                isFilters ? (
                                    <button className="menu__container__button-filters-close" onClick={() => setIsFilters(!isFilters)}>
                                        <img src={closeMenuIcon} alt={closeMenuIcon} />
                                    </button>
                                ) : (
                                    <button className="menu__container__button-filters active" onClick={() => setIsFilters(!isFilters)}>
                                        <img src={filtersMenuIcon} alt={filtersMenuIcon} />
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    <div className="menu__container-content">
                        <div className={`content__left ${isFilters ? 'hide' : ''}`}>
                            {isLoading && <Loader />}
                            <section className="section__cards">
                                <Cards users={users?.results} />
                                <Pagination data={users} onChange={onChangePage} />
                            </section>
                            {isLoading && <Loader />}
                        </div>
                        <div className={`content__right ${isFilters ? 'show' : ''}`}>
                            <section className="section__filters">
                                <h2 className="section__filters-title">
                                    Фильтры
                                </h2>
                                <div className="filter">
                                    <div className="filter__image">
                                        <img src={outlineMenuIcon} alt={outlineMenuIcon} />
                                        <ToggleSwitch toggle={isToggle} onToggleChange={onToggleChange} />
                                    </div>
                                    <div className="filter__age">
                                        <FilterRange
                                            value={age}
                                            setValue={setAge}
                                            title="Возраст"
                                            onHandleChangeAge={onHandleChangeAge}
                                            text="лет"
                                        />
                                    </div>
                                    <div className="filter__gender">
                                        <FilerGender />
                                    </div>
                                    <div className="filter__salary">
                                        <FilterRange
                                            value={salary}
                                            setValue={setSalary}
                                            title="Желаемая зарплата"
                                            onHandleChangeAge={onHandleChangeSalary}
                                            salary={!!salary}
                                            text="грн"
                                        />
                                    </div>
                                    <div className="filter__experience">
                                        <FilterCheckbox items={filterExperience} title="Опыт работы" isStudent />
                                    </div>
                                    <div className="filter__language">
                                        <FilterLanguage />
                                    </div>
                                    <div className="filter__employment">
                                        <FilterCheckbox items={filterEmployment} title="Тип занятости" />
                                    </div>
                                    <div className="filter__education">
                                        <FilterCheckbox items={filterEducation} title="Образование" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </menu >
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;