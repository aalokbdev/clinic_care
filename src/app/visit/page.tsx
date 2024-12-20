"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Input from "../components/Input";
import SelectBox from "../components/Select";
import { Checkbox } from "@/components/ui/checkbox";
import TextArea from "../components/TextArea";
import BreadcrumBox from "../components/BreadCrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonBox from "../components/Button";
import AddIcon from "../assets/svg/AddIcon.svg";
import ArrowIcon from "../assets/svg/ArrowIcon.svg";
import * as list from "../../lib/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [patients, setPatients] = useState([1]); // To manage patient sections
  const [selectedDate, setSelectedDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [formData, setFormData] = useState({}); // Collect form data
  const [submittedData, setSubmittedData] = useState([]); // Store submitted entries
  const [detaillist,setDetailList] = useState([]);

  // Add a new patient (max 6)
  const handleAddPatient = () => {
    if (patients.length < 6) {
      setPatients([...patients, patients.length + 1]);
    }
  };

  // Dynamic time constraints for "Od" and "Do"
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
  };

  const handleFromTimeChange = (e) => {
    setFromTime(e.target.value);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      setSubmittedData([...submittedData, formData]);
      alert("Form submitted successfully");
      console.log('submittedData',submittedData);
        // Reset form data and other states
    setFormData({});
    setPatients([1]); // Reset patients to the initial state
    setSelectedDate(""); // Clear selected date
    setFromTime(""); // Clear time fields// Reset form data
    } else {
      alert("Please fill all required fields.");
    }
  };

  const validateForm = () => {
    // Add proper validation logic here
    // Example: Ensure required fields are filled
    return Object.keys(formData).length > 0; // Basic validation for demonstration
  };

  return (
    <div className="bg-[#F7F7F8]">
      <Navbar />
      <div className="flex justify-center gap-5 mt-[74px]">
        <div>
          <Profile />
        </div>
        <div className="flex flex-col gap-6 min-w-[715px]">
          <div className="flex flex-col">
            <BreadcrumBox />
            <h2 className="text-[40px] text-[#112950]">Umawianie wizyty</h2>
          </div>
          <div className="h-[600px] overflow-scroll flex flex-col gap-6">
            {/* Visit Section */}
            <div className="p-10 bg-white">
              <p className="text-[#112950] text-md">Wizyta</p>
              <div className="flex flex-col gap-6">
                <Input lable="Numer zgłoszenia" />
                <SelectBox
                  label="Rodzaj wizyty"
                  list={list.visitTypes}
                  onChange={(value) => handleInputChange("visitType", value)}
                  placeholder={"Rodzaj wizyty"}
                />
                <SelectBox
                  label="Specjalizacja"
                  list={list.specializations}
                  onChange={(value) => handleInputChange("specialization", value)}
                  placeholder={"Specjalizacja"}
                />
                <div className="flex flex-col gap-2">
                  <label htmlFor="visitDate" className="font-bold text-[#112950]">
                    Data wizyty
                  </label>
                  <input
                    type="date"
                    id="visitDate"
                    onChange={(e) => {
                      handleDateChange(e);
                      handleInputChange("visitDate", e.target.value);
                    }}
                    min={new Date().toISOString().split("T")[0]}
                    max={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label htmlFor="fromTime" className="font-bold text-[#112950]">
                    Godzina
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="time"
                      id="fromTime"
                      onChange={(e) => {
                        handleFromTimeChange(e);
                        handleInputChange("fromTime", e.target.value);
                      }}
                      className="min-w-[313px] border-b-2"
                    />
                    <input
                      type="time"
                      id="toTime"
                      min={fromTime ? `${parseInt(fromTime.split(":"[0])) + 1}:00` : "00:00"}
                      onChange={(e) => handleInputChange("toTime", e.target.value)}
                      className="min-w-[313px] border-b-2"
                    />
                  </div>
                </div>
                <SelectBox
                  label="Temat"
                  list={list.topics}
                  onChange={(value) => handleInputChange("topic", value)}
                  placeholder={"Temat"}
                />
                <TextArea
                  onChange={(value) => handleInputChange("additionalInfo", value)}
                />
                <SelectBox
                  label="Język wizyty"
                  list={list.languages}
                  onChange={(value) => handleInputChange("language", value)}
                  placeholder={"Język wizyty"}
                />
              </div>
            </div>

            {/* Patients Section */}
            {patients.map((_, index) => (
              <div key={index} className="p-10 bg-white flex flex-col gap-6">
                <p className="text-[#112950] text-md">Pacjent {index + 1}</p>
                <SelectBox
                  label="Objawy (opcjonalnie)"
                  list={list.symptoms}
                  onChange={(value) => handleInputChange(`patient${index + 1}Symptoms`, value)}
                  placeholder={"Objawy"}
                />
                <div className="bg-white flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-bold text-[#112950]">
                      Wiek pacjenta
                    </label>
                    <Tabs defaultValue="account">
                      <TabsList>
                        <TabsTrigger value="account" className="min-w-[309px]">
                          Dorosły
                        </TabsTrigger>
                        <TabsTrigger value="password" className="min-w-[309px]">
                          Dziecko
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="account">
                        {/* Make changes to your account here. */}
                      </TabsContent>
                      <TabsContent value="password">
                        {/* Change your password here. */}
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div>
                    <label htmlFor="" className="font-bold text-[#112950]">
                      Dane pacjenta
                    </label>
                    <div className="flex gap-2">
                      <input
                        placeholder="Imię"
                        className="border-b-2 min-w-[309px] py-2"
                        onChange={(e) => handleInputChange(`patient${index + 1}FirstName`, e.target.value)}
                      />
                      <input
                        placeholder="Nazwisko"
                        className="border-b-2 min-w-[309px] py-2"
                        onChange={(e) => handleInputChange(`patient${index + 1}LastName`, e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Address Details Section */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-bold text-[#112950]">
                      Dane adresowe
                    </label>
                    <SelectBox
                      label="Kraj"
                      list={list.countries}
                      onChange={(value) => handleInputChange(`patient${index + 1}Country`, value)}
                      placeholder={"Kraj"}
                    />
                    <div className="flex gap-2 mt-4">
                      <input
                        placeholder="Ulica"
                        className="border-b-2 min-w-[409px] py-2 px-1 outline-none"
                        onChange={(e) => handleInputChange(`patient${index + 1}Street`, e.target.value)}
                      />
                      <input
                        placeholder="Nr lokalu"
                        className="border-b-2 min-w-[219px] py-2 px-1 outline-none"
                        onChange={(e) => handleInputChange(`patient${index + 1}ApartmentNumber`, e.target.value)}
                      />
                    </div>

                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox
                        id={`otherAddress${index}`}
                        onChange={(e) => handleInputChange(`patient${index + 1}OtherAddress`, e.target.checked)}
                      />
                      <label
                        htmlFor={`otherAddress${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Wizyta ma się odbyć na inny adres
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Patient Button */}
            <div className="flex flex-col gap-2">
              <ButtonBox
                bg={"white"}
                color={"blue-500"}
                title={"Dodaj pacjenta"}
                icon={AddIcon}
                onClick={handleAddPatient}
              />
              <ButtonBox
                bg={"blue-500"}
                color={"white"}
                title={"Dalej"}
                icon={ArrowIcon}
                onClick={handleSubmit}
              />
            </div>
          </div>

          {/* Submitted Data Section */}
          <div className="p-10 bg-gray-100 mt-6 rounded-lg">
            <h3 className="text-[24px] text-[#112950] font-bold mb-4">Submitted Data</h3>
            <div className="grid grid-cols-1 gap-4">
              {submittedData.map((data, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-white shadow-sm flex flex-col gap-2"
                >
                  <h4 className="text-lg font-semibold text-blue-600">Entry {index + 1}</h4>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-w-[190px]">
          <SelectBox  list={list.visitList} placeholder={"Wizyta"}/>
          <SelectBox  list={list.patients} placeholder={"Pacjent"}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
