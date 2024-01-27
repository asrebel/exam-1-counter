import React from 'react';
import {Button} from "./Button";


type CounterProps = {
    count: number
    maxCounterValue: number
    minCounterValue: number
    incCount: () => void
    resetCount: () => void
}

export const Counter: React.FC<CounterProps> = (
    {
        count,
        incCount,
        resetCount,
        maxCounterValue,
        minCounterValue
    }) => {

    const isIncBtnDisabled = count === maxCounterValue
    const isResBtnDisabled = count === minCounterValue

    return (
        <div className={'counter'}>


            <div className={isIncBtnDisabled ? 'redCount monitor' : 'monitor'}>
                <h1>{count}</h1>
            </div>

            <div className={'butBlock'}>
                <Button title={'Inc'}
                        isDisabled={isIncBtnDisabled}
                        onClickHandler={incCount}

                />
                <Button title={'Reset'}
                        isDisabled={isResBtnDisabled}
                        onClickHandler={resetCount}/>
            </div>
        </div>
    );
};

