import ProjectBox from "../components/ProjectBox";

function App() {
    return (
        <div className="min-h-screen py-10 bg-[#f1f6ff]">
            <h1 className="text-8xl font-extrabold text-[#89adff] text-center">
                Dowon Kim
            </h1>

            <div className="flex flex-col items-center mt-10 gap-y-10">
                <ProjectBox name="project name 1" />
                <ProjectBox name="project name 2" />
                <ProjectBox name="project name 3" />
            </div>
        </div>
    );
}

export default App;
