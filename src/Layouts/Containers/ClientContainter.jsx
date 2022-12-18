import React from 'react';

function ClientContainter({children  , LayoutBackground="" , Custumize="",LayoutBackgroundOverRide ,CustumizeOverRide , FlexerSyle}) {
    const Custum = CustumizeOverRide
                  ? SafeString(CustumizeOverRide)
                  : `w-full px-3 mx-3 lg:mx-0 sm:px-0 max-w-[700px] lg:max-w-[764px] xl:max-w-[1170px] 3xl:max-w-[1500px] ${SafeString(Custumize)} `

    const RootContainer = LayoutBackgroundOverRide
                        ? SafeString(LayoutBackgroundOverRide)
                        :`relative ${SafeString(LayoutBackground)}`



    return (
        <div className={RootContainer}>
        <div className={`flex justify-center`}>
          <div className={Custum}>
            {children}
          </div>
        </div>
      </div>
    );
}

export default ClientContainter;




function SafeString (variable , init="") {
  
    if (typeof variable == "string")
        return variable
    return init
}