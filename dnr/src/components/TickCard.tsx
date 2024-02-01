import { secondsToDays, weiToWeth } from "@root/utils/conversion";

export const TickCard = ({
  tokenName,
  limit,
  duration,
  rate,
}: {
  tokenName: string;
  limit: string;
  duration: string;
  rate: string;
}) => {
  return (
    <div className="flex flex-col w-full bg-gray-200 rounded-lg overflow-hidden">
      <div className="flex justify-center items-center w-full min-h-12 bg-indigo-700 font-semibold text-sm text-center p-2">
        {tokenName.replace("MetaStreet V2 Deposit: ", "")}
      </div>
      <div className="flex flex-col w-full h-full p-4">
        <div className="flex w-full justify-between">
          {/* RATE */}
          <>
            <div className="flex w-full flex-col gap-1">
              <p className="text-xl text-indigo-500 font-semibold">12.4%</p>
              <p className="text-[9px] text-gray-500 font-light">Current APR</p>
            </div>
          </>

          {/* tag */}
          <div className="flex justify-center items-center gap-1 bg-indigo-600/60 w-16 h-7 rounded-full">
            <p className="text-gray-100 font-semibold text-sm">
              {secondsToDays(duration)}
            </p>
          </div>
        </div>
        <div className="flex w-full h-px bg-gray-300 my-1"></div>

        {/* Loan limit */}
        <div className="flex w-full justify-between">
          <p className="text-sm text-gray-500 font-normal">Loan limits</p>
          <p className="text-sm text-gray-900 font-normal">
            {weiToWeth(limit)} WETH
          </p>
        </div>

        {/* Loan limit */}
        <div className="flex w-full justify-between">
          <p className="text-sm text-gray-500 font-normal">Loan limits</p>
          <p className="text-sm text-gray-900 font-normal">
            {weiToWeth(limit)} WETH
          </p>
        </div>
      </div>
    </div>
  );
};
