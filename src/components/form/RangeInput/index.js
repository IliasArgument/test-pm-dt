import React from "react";
import { Range, getTrackBackground } from "react-range";

const RangeInput = ({ values, onChange, salary }) => {

    const STEP = 1;
    const MIN = salary ? 900 : 15;
    const MAX = salary ? 1100 : 45;


    return (
        <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
                if (onChange) {
                    onChange(values);
                }

            }}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        display: "flex",
                        width: "100%",
                        marginBottom: "31px"
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: "1px",
                            width: "100%",
                            borderRadius: "30px",
                            background: getTrackBackground({
                                values,
                                colors: ["#ccc", "#548BF4", "#ccc"],
                                min: MIN,
                                max: MAX
                            }),
                            alignSelf: "center"
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => {

                return (
                    <div
                        className="range-style"
                        {...props}
                        style={
                            props.key === 0
                                ? {
                                    ...props.style,
                                    height: "15px",
                                    width: "15px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000046",
                                    border: "1px solid #000046",
                                    boxSizing: "border-box"
                                }
                                : {
                                    ...props.style,
                                    height: "23px",
                                    width: "23px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFF9E4",
                                    border: "3px solid #000046",
                                    boxSizing: "border-box"
                                }
                        }
                    >
                        <div />
                    </div>
                );
            }}
        />
    );
};

export default RangeInput;

