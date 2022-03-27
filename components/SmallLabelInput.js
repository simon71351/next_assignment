export default function SmallLabelInput({containerClasses ="w-32", inputType, label, postFix }) {
    function InputElem() {
        let elem;
        switch (inputType) {
            case 'text':
                elem = <input type="text" className="outline-none mt-2 mb-6 px-6 py-3 text-lg border-2 rounded-lg h-11 w-full" />
                break;
            case 'textWithPostfix':
                elem = <div className="outline-none mt-2 mb-6 flex flex-row w-auto border-2 rounded-lg items-center  w-full">
                    <input type="text" className=" px-6 py-3 text-lg  h-11 w-9/12" />
                    <span className="m-2 text-sm text-center text-gray-300 w-3/12 ">{postFix}</span>
                </div>
                break;
            default:
                elem = <select className="outline-none mt-2 mb-6 border-2 rounded-lg h-11  w-full">
                    <option>Type</option>
                    <option>Type</option>
                    <option>Type</option>
                </select>
                break;
        }
        return elem;
    }

    return (
        <div className={containerClasses}>
            <sm className="block pl-2 pb-1 text-xs">{label}</sm>
            {InputElem()}
        </div>
    )
}