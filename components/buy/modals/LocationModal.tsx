import { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { Google_Autocomplete_Key } from "@/libs/constants";

type Props = {
  location: string;
  setLocation: Function;
  setLat: Function;
  setLng: Function;
  radius: number;
  setRadius: Function;
  setIsLocationModal: Function;
};

const LocationModal = ({
  location,
  setLocation,
  setLat,
  setLng,
  radius,
  setRadius,
  setIsLocationModal,
}: Props) => {
  const [selectedRadius, setSelectedRadius] = useState<number>(radius);
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [selectedLat, setSelectedLat] = useState<number>(0);
  const [selectedLng, setSelectedLng] = useState<number>(0);

  const apply = () => {
    setIsLocationModal(false);
    setLocation(selectedPlace);
    setLat(selectedLat);
    setLng(selectedLng);
    setRadius(selectedRadius);
  };

  const clear = () => {
    setIsLocationModal(false);
    setLocation("");
    setLat(0);
    setLng(0);
    setRadius(50);
  };
  return (
    <div className="absolute top-[40px] left-[0px] w-[250px] vs:w-[340px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg z-30">
      <div className="w-full px-6 pb-8 space-y-4">
        <div className="text-left">
          <label className="form-label inline-block text-base font-medium text-[#333]">
            Location
          </label>
          <div>
            <Autocomplete
              className="form-control block w-full px-3 py-1.5 text-sm font-medium text-[#333] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
              apiKey={Google_Autocomplete_Key}
              defaultValue={location}
              onPlaceSelected={(place) => {
                const address = place.formatted_address || "";
                setSelectedPlace(address);
                geocodeByAddress(address)
                  .then((results) => getLatLng(results[0]))
                  .then(({ lat, lng }) => {
                    setSelectedLat(lat);
                    setSelectedLng(lng);
                  });
              }}
              options={{
                types: ["(regions)"],
                componentRestrictions: { country: "us" },
              }}
            />
          </div>
        </div>
        <div className="text-left">
          <label className="form-label inline-block text-base font-medium text-[#333]">
            Mile radius
          </label>
          <select
            className="form-control block w-full px-3 py-1.5 text-sm font-medium text-[#063829] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none cursor-pointer"
            value={selectedRadius}
            onChange={(e: any) => setSelectedRadius(e.target.value)}
          >
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
            <option value={50}>50 miles</option>
            <option value={100}>100 miles</option>
            <option value={200}>200+ miles</option>
          </select>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex justify-between px-4 pt-6">
        <button
          className="bg-[#f7f9fc] hover:bg-blue-500 text-sm font-medium hover:text-white py-2 px-3 hover:border-transparent rounded"
          onClick={() => clear()}
        >
          Clear
        </button>
        <button
          className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-2 px-3 rounded cursor-pointer"
          onClick={() => apply()}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
