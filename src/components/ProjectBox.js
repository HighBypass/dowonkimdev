
function ProjectBox(props) {
    return (
        <div className="w-1/2 aspect-[5/3] rounded-2xl bg-white drop-shadow-[0_8px_12px_rgba(0,0,0,0.20)]">
            {props.name}
        </div>
    );
}

export default ProjectBox;