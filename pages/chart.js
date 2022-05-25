import { LinearGauge, ArcGauge } from '@progress/kendo-react-gauges';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function ChartPage() {
    const 꺼내온거 = useSelector((state) => state);
    console.log('꺼내온거: ', 꺼내온거);

    const colors = [
        {
            to: 25,
            color: '#1fe900',
        },
        {
            from: 25,
            to: 50,
            color: '#006de9',
        },
        {
            from: 50,
            to: 75,
            color: '#e9ce00',
        },
        {
            from: 75,
            color: '#e9000c',
        },
    ];

    const [cpuValue, setCpuValue] = useState(8);
    useEffect(() => {
        const interval = setInterval(() => {
            const cpuValue = Math.ceil(Math.random() * 100);
            setCpuValue(cpuValue);
        }, 7000);
        return () => clearInterval(interval);
    }, [cpuValue]);

    const arcOptions = {
        value: cpuValue,
        colors,
    };

    const arcCenterRenderer = (cpuValue, color) => {
        return (
            <h3
                style={{
                    color: color,
                }}
            >
                {cpuValue}%
            </h3>
        );
    };

    const [value, setValue] = useState(0);
    const [linearColor, setLinearColor] = useState('gray');

    useEffect(() => {
        const interval = setInterval(() => {
            const value = Math.ceil(Math.random() * 100);
            setValue(value);
            if (value > 0 && value < 60) {
                setLinearColor('green');
            } else {
                setLinearColor('red');
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [value]);

    const linearOptions = {
        pointer: [
            {
                value: value,
                color: linearColor,
            },
        ],
        scale: {
            majorUnit: 20,
            minorUnit: 2,
            min: 0,
            max: 100,
            vertical: true,
        },
    };
    return (
        <span>
            <ArcGauge
                {...arcOptions}
                arcCenterRender={arcCenterRenderer}
                style={{
                    height: '100%',

                    zoom: 1,
                }}
            />
            <LinearGauge {...linearOptions} />
        </span>
    );
}
