import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      disabled={disabled}
      loading={isLoading}
      {...props}
    >
      {!isLoading && props.children}
    </Button>
  );
}
