export default function About() {
    return (
        <>
            <div className="grid grid-cols-2 p-12">
                <div className="">  {/*img div */}
                    <div className="py-10">  {/*image-wrapper*/}
                        <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="img" />
                    </div>
                </div>
                <div className="m-6 py-16"> {/*text div */}
                    <div className="mb-4">
                        <h1 className="font-bold text-3xl text-wrap text-justify">React JS is carried by an passionate Developer</h1>
                    </div>
                    <div className="grid grid-flow-row gap-4">
                        <div>
                        <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore hic nesciunt fugiat omnis repudiandae cupiditate ut quis voluptates, eos possimus aspernatur amet earum ullam! nobis doloribus, nisi iusto molestias vel?
                        </p>
                        </div>
                        <div>
                        <p className=" text-wrap text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore hic nesciunt fugiat omnis repudiandae nt nobis doloribus, nisi iusto molestias vel?
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}