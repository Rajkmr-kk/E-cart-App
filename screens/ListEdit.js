import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppImagePicker from "../components/forms/AppImagePicker";
import * as Location from "expo-location";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import Upload from "../screens/Upload";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(2).max(100000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please Select atleast 1 image").label("Images"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "apps",
  },
  {
    label: "Camera",
    value: 3,
    backgroundColor: "tomato",
    icon: "email",
  },
  {
    label: "Sports",
    value: 4,
    backgroundColor: "blue",
    icon: "email",
  },
  {
    label: "Movie & Games",
    value: 4,
    backgroundColor: "skyblue",
    icon: "lock",
  },
  {
    label: "Games",
    value: 6,
    backgroundColor: "lightgreen",
    icon: "email",
  },
];
const ListEdit = (props) => {
  const location = useLocation();
  const [uploadvisible, setUploadvisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadvisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadvisible(false);
      return alert("could not save the data");
    }
    resetForm();
  };

  return (
    <Screen>
      <Upload
        onDone={() => {
          setUploadvisible(false);
        }}
        visible={uploadvisible}
        progress={progress}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppImagePicker name="images" />
        <AppFormField maxLength={200} placeholder="Title" name="title" />
        <AppFormField
          placeholder="Price"
          maxLength={10}
          keyboardType="numeric"
          name="price"
          width={120}
        />

        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          placeholder="Description"
          maxLength={200}
          numberOfLines={2}
          name="description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default ListEdit;
