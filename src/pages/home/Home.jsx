export function Home() {
    return (
        <div className="w-full h-full flex flex-col my-5 items-center overflow-y-auto">
            <div className="flex h-full relative w-1/2 items-center overflow-hidden">
                <div className="gap-4 w-full flex flex-col">
                    <div className="w-120 h-8 bg-white rounded-3xl animate-moveLine" style={{ animationDuration: '3.5s' }}></div>
                    <div className="w-120 h-8 bg-orange-600 rounded-3xl animate-moveLine" style={{ animationDuration: '4.8s' }}></div>
                    <div className="w-120 h-8 bg-blue-400 rounded-3xl animate-moveLine" style={{ animationDuration: '2.3s' }}></div>
                    <div className="w-120 h-8 bg-white rounded-3xl animate-moveLine" style={{ animationDuration: '5.1s' }}></div>
                    <div className="w-120 h-8 bg-orange-600 rounded-3xl animate-moveLine" style={{ animationDuration: '6.4s' }}></div>
                    <div className="w-120 h-8 bg-white rounded-3xl animate-moveLine" style={{ animationDuration: '1.8s' }}></div>
                    <div className="w-120 h-8 bg-orange-600 rounded-3xl animate-moveLine" style={{ animationDuration: '7.2s' }}></div>
                    <div className="w-120 h-8 bg-blue-400 rounded-3xl animate-moveLine" style={{ animationDuration: '4.0s' }}></div>
                </div>
            </div>
        </div>
    );
}