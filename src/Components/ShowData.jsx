import ResetButton from "./Buttons/ResetButton";
const ShowData = ({formDatas , handleReset}) => {
    return ( 

        <section>
        <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="mb-6 pb-10 text-center text-3xl font-bold sm:mb-10 md:mb-20 md:text-5xl">
            Here is your invoice
          </h2>
          <div className="grid gap-x-6 gap-y-10 sm:gap-y-14 lg:grid-cols-1">
            <div className="flex flex-col rounded-lg bg-[#f2f2f7] pt-6 sm:rounded-2xl sm:pt-8">
              <div className="flex flex-col ">
                <div className="grid grid-cols-2 [border-bottom:1px_solid_rgb(213,_213,_234)]">
                  {Object.keys(formDatas).map(
                    (item) =>
                      formDatas[item] !== "" && (
                        <>
                          <p className="p-5 px-8 text-xl font-bold [border-right:1px_solid_rgb(213,_213,_234)] sm:py-8 lg:px-10">
                            {item.toUpperCase()}
                          </p>
                          <p className="p-5 px-8 text-xl font-bold [border-right:1px_solid_rgb(213,_213,_234)] sm:py-8 lg:px-10">
                            {formDatas[item]}
                          </p>
                        </>
                      )
                  )}
                </div>
              </div>
            </div>
            <ResetButton handleReset= {handleReset}></ResetButton>
          </div>
        </div>
      </section>

     );
}
 
export default ShowData;