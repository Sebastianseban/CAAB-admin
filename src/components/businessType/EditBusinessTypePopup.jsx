

import { useEffect, useState } from "react";
import useBusinessTypeStore from "../../store/businessTypeStore";
import {
  useBusinessTypeById,
  useUpdateBusinessType,
} from "../../hooks/useBusinessType";

const  EditBusinessTypePopup = ({ departments = [] }) => {
  const { selectedBusinessTypeId, isEditPopupOpen, closeEditPopup } =
    useBusinessTypeStore();

  const { data, isLoading } = useBusinessTypeById(
    selectedBusinessTypeId,
    isEditPopupOpen
  );

  const { mutate, isPending } = useUpdateBusinessType(selectedBusinessTypeId);

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (data) {
      const depNames = Array.isArray(data.department_name)
        ? data.department_name.map((name) => name.trim())
        : [];

      setSelectedDepartments(depNames);
      setSelectAll(depNames.length === departments.length);
    }
  }, [data, departments]);

  useEffect(() => {
    if (!isEditPopupOpen) {
      setSelectedDepartments([]);
      setSelectAll(false);
    }
  }, [isEditPopupOpen]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedDepartments([]);
    } else {
      setSelectedDepartments(departments.map((d) => d.department_name.trim()));
    }
    setSelectAll(!selectAll);
  };

  const handleDepartmentChange = (depName) => {
    const trimmed = depName.trim();
    const updated = selectedDepartments.includes(trimmed)
      ? selectedDepartments.filter((name) => name !== trimmed)
      : [...selectedDepartments, trimmed];

    setSelectedDepartments(updated);
    setSelectAll(updated.length === departments.length);
  };

  if (!isEditPopupOpen) return null;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="w-[560px] bg-white rounded-lg">
        <div className="h-[72px] p-6 bg-blue-600 text-white flex justify-between">
          <span>Edit Business Type</span>
          <button onClick={closeEditPopup}>X</button>
        </div>

        <div className="p-6">
          <p className="text-xl font-semibold">{data?.business_type}</p>

          <div className="flex gap-2 mt-4">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <label>Select All</label>
          </div>

          <div className="p-4 grid grid-cols-2 gap-4 border rounded-lg mt-4">
            {departments.map((dep) => (
              <label key={dep.id} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={selectedDepartments.includes(dep.department_name.trim())}
                  onChange={() => handleDepartmentChange(dep.department_name)}
                />
                {dep.department_name}
              </label>
            ))}
          </div>

          <button
            className="w-full mt-6 py-3 bg-purple-700 text-white rounded-lg"
            disabled={isPending}
            onClick={() =>
              mutate(
                {
                  business_type: data.business_type,
                  department_name: selectedDepartments,
                },
                { onSuccess: () => closeEditPopup() }
              )
            }
          >
            {isPending ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBusinessTypePopup;
