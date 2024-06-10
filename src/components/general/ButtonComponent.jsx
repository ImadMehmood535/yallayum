import { Button } from "@nextui-org/react";
import React from "react";

const ButtonComponent = ({
  loading,
  text,
  isActive,
  onClick,
  btnclass,
  type,
}) => {
  return (
    <div className="btn-com font-semibold max-w-[130px] mx-auto ">
      {" "}
      <Button
        type={type}
        className={`w-full Fedra-700 px-10 !py-[16px] text-white bg-black text-sm font-medium  border rounded-full font-semibold`}
        onClick={onClick}
        isLoading={loading}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
