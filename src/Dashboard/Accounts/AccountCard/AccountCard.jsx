/* eslint-disable react/prop-types */



const AccountCard = ({Balances}) => {
    
  
    return (
        <div>
             <div>
                   
                    <div>
                        {/* cash  */}
                       
                        <div className=" flex mb-3 justify-between shadow-sm rounded h-10 border-b-2 ">
                            <p className="mt-2 ml-5  text-[#AEAEAF]">{Balances.name}</p>
                            <p className="mt-2   text-[#AEAEAF]">{Balances.group}</p>
                            <p className="mt-2 mr-5 text-[#AEAEAF]">$ {Balances.amount}</p>
                        </div>
             
                        

                    </div>


                </div>
        </div>
    );
};

export default AccountCard;