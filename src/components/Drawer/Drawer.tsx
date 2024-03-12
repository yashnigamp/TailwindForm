import InputBox from "../InputElements/InputText";
import InputSelect from "../InputElements/InputSelect";
import InputButton from "../InputElements/InputButton";

function DrawerComponent({
  isDrawerOpen,
  toggleDrawer,
}: {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}) {
  return (
    <div>
      {isDrawerOpen && (
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen  overflow-y-auto transition-transform  bg-white w-[45%] flex flex-col "
        >
          <div className="rounded-sm p-5 shadow-[0_1px_2px_#00000040] ">
            <h4 className="font-bold">Edit User</h4>
            <h6>Abbot, Derek</h6>
          </div>

          <button
            type="button"
            onClick={toggleDrawer}
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-3 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="grid mt-4 md:grid-cols-2 gap-4 p-5">
            <InputBox
              label="VZID"
              placeholder="1234"
              required={true}
              disabled={true}
              type="number"
            />
            <InputBox
              label="First Name"
              placeholder=""
              required={true}
              disabled={false}
              type="text"
            />
            <InputBox
              label="Last Name"
              placeholder=""
              required={true}
              disabled={false}
              type="text"
            />
            <InputBox
              label="Nickname"
              placeholder=""
              required={false}
              disabled={false}
              type="text"
            />
            <InputBox
              label="Email"
              placeholder=""
              required={true}
              disabled={false}
              type="text"
            />
            <InputBox
              label="Cell Phone"
              placeholder=""
              required={false}
              disabled={false}
              type="number"
            />
            <InputSelect
              label={"Region"}
              options={["DO-CP", "PROD"]}
              required={true}
              disabled={false}
            />
            <InputSelect
              label={"State"}
              options={["AL", "Javascript", "Node", "PHP"]}
              required={true}
              disabled={false}
            />
            <InputSelect
              label={"EnterpriseID"}
              options={["Select"]}
              required={false}
              disabled={true}
            />
            <InputSelect
              label={"Supervisor"}
              options={["Select"]}
              required={false}
              disabled={true}
            />
            <InputBox
              label="Tech EC"
              placeholder=""
              required={true}
              disabled={false}
              type="number"
            />
            <InputSelect
              label={"Work Type"}
              options={["Select"]}
              required={true}
              disabled={false}
            />
            <InputSelect
              label={"User Type"}
              options={["Select"]}
              required={true}
              disabled={false}
            />
            <InputSelect
              label={"Group"}
              options={["Inactive Profiles"]}
              required={false}
              disabled={true}
            >
              <InputButton label="Edit Group" type="button" />
            </InputSelect>
          </div>
          <div className="rounded-sm p-5 shadow-[0_-1px_2px_#00000040] mt-auto flex flex-row justify-end">
            <InputButton label="Cancel" type="button" />
            <InputButton label="Update" type="button" styleClass="primary" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DrawerComponent;
