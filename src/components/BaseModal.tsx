import Link from "next/link";
import { FC } from "react";

interface BaseModalProps {
  children: React.ReactNode | React.ReactNode[];
  onCloseRedirectTo: string;
}

export const BaseModal: FC<BaseModalProps> = ({
  children,
  onCloseRedirectTo,
}) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          {/* CLOSE BUTTON */}
          <div className="absolute top-0 right-0 p-1 hover:bg-gray-200 hover: rounded-full m-1 ">
            <Link href={onCloseRedirectTo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>

          {/* MODAL CONTENT */}
          {children}
        </div>
      </div>
    </div>
  );
};
