const MicroContainer = () => {
    return (
        <div id="microAppContainer" className="box">
            {/* @ts-ignore */}
            <micro-app name="my-app" url="http://localhost:3101/" iframe clear-data></micro-app>
        </div>
    );
};
export default MicroContainer;
