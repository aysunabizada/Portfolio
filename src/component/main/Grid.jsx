import { CiFaceSmile } from "react-icons/ci";

function Grid() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="card cursor-pointer h-[250px] group gap-[0.5em] rounded-[1em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
                <div className="absolute card-hover top-0 left-0 h-full w-full bg-[#111111]" />
                <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                    <div className="h-fit w-full">
                        <CiFaceSmile className="text-4xl mb-2.5" />
                        <h1 className="card_heading text-[1.5em] tracking-[.2em]">
                            ABOUT
                        </h1>
                    </div>
                </div>
                <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                    Motivated Front-End Developer with hands-on experience in
                    building responsive and user-centered web interfaces.
                    <i className="block mt-2">( click for more )</i>
                </p>
            </div>

            <div className="card col-span-2 cursor-pointer h-[250px] group gap-[0.5em] rounded-[1em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
                <div className="absolute card-hover top-0 left-0 h-full w-full bg-[#111111]" />
                <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                    <div className="h-fit w-full">
                        <CiFaceSmile className="text-4xl mb-2.5" />
                        <h1 className="card_heading uppercase text-[1.5em] tracking-[.2em]">
                            Projects
                        </h1>
                    </div>
                </div>
                <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                    Motivated Front-End Developer with hands-on experience in
                    building responsive and user-centered web interfaces.
                    <i className="block mt-2">( click for more )</i>
                </p>
            </div>

            <div className="card col-span-2 cursor-pointer h-[250px] group gap-[0.5em] rounded-[1em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
                <div className="absolute card-hover top-0 left-0 h-full w-full bg-[#111111]" />
                <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                    <div className="h-fit w-full">
                        <CiFaceSmile className="text-4xl mb-2.5" />
                        <h1 className="card_heading text-[1.5em] tracking-[.2em]">
                            SKILLS
                        </h1>
                    </div>
                </div>
                <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                    Motivated Front-End Developer with hands-on experience in
                    building responsive and user-centered web interfaces.
                    <i className="block mt-2">( click for more )</i>
                </p>
            </div>

            <div className="card cursor-pointer h-[250px] group gap-[0.5em] rounded-[1em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
                <div className="absolute card-hover top-0 left-0 h-full w-full bg-[#111111]" />
                <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                    <div className="h-fit w-full">
                        <CiFaceSmile className="text-4xl mb-2.5" />
                        <h1 className="card_heading text-[1.5em] tracking-[.2em]">
                            CONTACT
                        </h1>
                    </div>
                </div>
                <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                    Motivated Front-End Developer with hands-on experience in
                    building responsive and user-centered web interfaces.
                    <i className="block mt-2">( click for more )</i>
                </p>
            </div>
        </div>

    )
}

export default Grid