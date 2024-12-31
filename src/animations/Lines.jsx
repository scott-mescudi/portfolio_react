import styled, { keyframes } from 'styled-components';

const moveLine = (distance = 25) => keyframes`
    0% {
        transform: translateX(-${distance}vw);
    }
    50% {
        transform: translateX(${distance}vw);
    }
    100% {
        transform: translateX(-${distance}vw);
    }
`;

const Line = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 20px;
    animation: ${(props) => moveLine()} 10s linear infinite;
`;

export function Lines() {
    return (
        <div className="flex h-full relative mt-5 w-full items-center overflow-hidden">
            <div className="gap-4 w-full flex flex-col">
                <Line className="bg-white" style={{ animationDuration: '3.5s' }} />
                <Line className="bg-orange-600" style={{ animationDuration: '4.8s' }} />
                <Line className="bg-blue-400" style={{ animationDuration: '2.3s' }} />
                <Line className="bg-white" style={{ animationDuration: '5.1s' }} />
                <Line className="bg-orange-600" style={{ animationDuration: '6.4s' }} />
                <Line className="bg-white" style={{ animationDuration: '1.8s' }} />
                <Line className="bg-orange-600" style={{ animationDuration: '7.2s' }} />
                <Line className="bg-blue-400" style={{ animationDuration: '4.0s' }} />
            </div>
        </div>
    );
}
