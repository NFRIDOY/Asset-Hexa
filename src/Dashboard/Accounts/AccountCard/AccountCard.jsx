/* eslint-disable react/prop-types */

const AccountCard = ({ Balances }) => {
  return (
    <div>
      <div>
        <div>
          {/* cash  */}

          <div className="grid grid-cols-3 mb-3 shadow-sm rounded h-10 border-b-2 mt-2">
            <p className="ml-5  text-black">{Balances?.account}</p>
            <p className="text-black flex justify-center">
              {Balances?.group}
            </p>
            <p className="mr-5 text-black flex justify-end">
              $ {Balances?.amount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
