import { Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { Checkbox } from "@nextui-org/react";

const InputField = ({
  type,
  isInvalid,
  label,
  placeholder,
  errortext,
  isRequired,
  options,
  register,
  name,
  defaultValue,
  disabled = false,
  setValue = () => {},
  errors,
  value,
  emailTrue = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="field-wrapper">
        {label && (
          <label className="text-[#8F8F8F] text-sm font-medium  px-1 capitalize">
            {label}
            {isRequired && <span className="text-red-700"> *</span>}
          </label>
        )}
        <div className="field-container mt-2">
          {type === "select" ? (
            <Select
              variant="bordered"
              label={placeholder}
              required={isRequired}
              options={options}
              isInvalid={isInvalid}
              defaultSelectedKeys={[defaultValue]}
              isDisabled={disabled}
              size="lg"
               
              aria-label={label || placeholder}
              color={disabled ? "primary" : "#8F8F8F"}
              {...register(name)}
              classNames={{
                inputWrapper: [
                  "bordered",
                  "border-1",
                  "border-[#EBEBEB]",
                  "hover:border-[#3F7FAE]",
                  "rounded-full",
                  "custom-input-design",
                ],
              }}
            >
              {options.map((item, key) => (
                <SelectItem key={item.id ? item.id : item} value={item.name}>
                  {emailTrue
                    ? item?.email
                    : item.name
                    ? item.name
                    : item
                    ? "active"
                    : "inactive"}
                </SelectItem>
              ))}
            </Select>
          ) : type === "Checkbox" ? (
            <Checkbox
              defaultSelected
              required={isRequired}
              variant="bordered"
              placeholder={placeholder}
              isInvalid={isInvalid}
              errorMessage={errortext}
              size="lg"
              radius="md"
              labelPlaceholder="Secondary"
              defaultValue={defaultValue}
              color={isInvalid ? "#00000" : "#8F8F8F"}
              {...register(name, { required: isRequired ? true : false })}
            >
              {placeholder}
            </Checkbox>
          ) : (
            <Input
              type={isVisible ? "text" : type}
              required={isRequired}
              variant="bordered"
              placeholder={placeholder}
              isInvalid={isInvalid}
              errorMessage={errortext}
              size="lg"
              aria-label={label || placeholder}
              labelPlaceholder="Secondary"
              defaultValue={defaultValue}
              value={value}
              onValueChange={setValue}
              color={isInvalid ? "#00000" : "#8F8F8F"}
              {...register(name, { required: isRequired ? true : false })}
              endContent={
                type === "password" && (
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                )
              }
              classNames={{
                inputWrapper: [
                  "bordered",
                  "border-1",
                  "rounded-full",
                  "px-6",
                  "custom-input-design",
                ],
              }}
            />
          )}
          {/* {error && <p className="text-sm text-red-800 p-2">{error}</p>} */}
          {errors && errors[name] && (
            <p className="text-tiny text-danger pl-2 mt-1">
              {errortext ? errortext : errors[name].message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default InputField;
