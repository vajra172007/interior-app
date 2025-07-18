import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, router, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { INTERIOR_SCHEMAS } from "../components/interiorSchemas";
import { COLORS } from "../styles/colors";

// TableHeader component
const TableHeader = ({ type }) => {
  return (
    <>
      {type === "flooring" ? (
        <>
          <View style={[styles.tableHeaderCell, styles.snoColumn]}>
            <Text style={styles.headerText}>S.No</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.roomColumn]}>
            <Text style={styles.headerText}>Room</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Height (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Width (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Total Sqft</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Material Cost</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Laying Charge</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.totalColumn]}
          >
            <Text style={styles.headerText}>Total</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.actionColumn]}
          >
            <Text style={styles.headerText}>Actions</Text>
          </View>
        </>
      ) : type === "curtains" ? (
        <>
          <View style={[styles.tableHeaderCell, styles.snoColumn]}>
            <Text style={styles.headerText}>S.No</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.roomColumn]}>
            <Text style={styles.headerText}>Room</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Width (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Height (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.smallColumn]}
          >
            <Text style={styles.headerText}>Pieces</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Total Meters</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.typeColumn]}
          >
            <Text style={styles.headerText}>Curtain Type</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Total Cloth Price</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Stitching Price</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Lining Price</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.totalColumn]}
          >
            <Text style={styles.headerText}>Total</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.actionColumn]}
          >
            <Text style={styles.headerText}>Actions</Text>
          </View>
        </>
      ) : type === "blinds" ? (
        <>
          <View style={[styles.tableHeaderCell, styles.snoColumn]}>
            <Text style={styles.headerText}>S.No</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.roomColumn]}>
            <Text style={styles.headerText}>Room</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Height (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Width (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Total Sqft</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Blinds Cost</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.typeColumn]}
          >
            <Text style={styles.headerText}>Blind Type</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.smallColumn]}
          >
            <Text style={styles.headerText}>Parts</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Cloth Required</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Cloth Cost</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Stitching Cost</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.totalColumn]}
          >
            <Text style={styles.headerText}>Total</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.actionColumn]}
          >
            <Text style={styles.headerText}>Actions</Text>
          </View>
        </>
      ) : type === "mosquito-nets" ? (
        <>
          <View style={[styles.tableHeaderCell, styles.snoColumn]}>
            <Text style={styles.headerText}>S.No</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.roomColumn]}>
            <Text style={styles.headerText}>Room</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Width (in/ft)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Height (in/ft)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.typeColumn]}
          >
            <Text style={styles.headerText}>Material Type</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.costColumn]}
          >
            <Text style={styles.headerText}>Rate/Sqft</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Total Sqft</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Material Cost</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Description</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.actionColumn]}
          >
            <Text style={styles.headerText}>Actions</Text>
          </View>
        </>
      ) : type === "wallpapers" ? (
        <>
          <View style={[styles.tableHeaderCell, styles.snoColumn]}>
            <Text style={styles.headerText}>S.No</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.roomColumn]}>
            <Text style={styles.headerText}>Room</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Width (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.dimensionColumn]}
          >
            <Text style={styles.headerText}>Height (in)</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Total Sqft</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.smallColumn]}>
            <Text style={styles.headerText}>Rolls</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Material Cost</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.mediumColumn]}
          >
            <Text style={styles.headerText}>Implementation Cost</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.totalColumn]}
          >
            <Text style={styles.headerText}>Total</Text>
          </View>
          <View
            style={[styles.tableHeaderCell, styles.actionColumn]}
          >
            <Text style={styles.headerText}>Actions</Text>
          </View>
        </>
      ) : null}
    </>
  );
};

// TableRow component
const TableRow = ({ type, m, index, id, router, deleteMeasurement, styles }) => {
  // Helper functions for custom logic
  const getMosquitoWidth = () => `${m.width || "-"}" (${m.widthFeet?.toFixed(1) || "-"}ft)`;
  const getMosquitoHeight = () => `${m.height || "-"}" (${m.heightFeet?.toFixed(1) || "-"}ft)`;
  const getWallpaperRolls = () => {
    const squareInches = (parseFloat(m.width) || 0) * (parseFloat(m.height) || 0);
    const squareFeet = squareInches / 144;
    let rolls = squareFeet / 50;
    const decimal = rolls - Math.floor(rolls);
    if (decimal >= 0.3) {
      rolls = Math.ceil(rolls);
    } else {
      rolls = Math.max(1, Math.floor(rolls));
    }
    return rolls;
  };
  const getWallpaperSqft = () => {
    const squareInches = (parseFloat(m.width) || 0) * (parseFloat(m.height) || 0);
    return (squareInches / 144).toFixed(2);
  };
  if (type === "flooring") {
    return (
      <View key={m.id} style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
        <View style={[styles.tableCell, styles.snoColumn]}><Text style={styles.cellText}>{index + 1}</Text></View>
        <View style={[styles.tableCell, styles.roomColumn]}><Text style={styles.cellText}>{m.roomLabel || "Untitled"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.height || "-"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.width || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{m.totalSqft?.toFixed(2) || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{m.costOfRoom?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{m.layingCharge?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.totalColumn]}><Text style={[styles.cellText, styles.totalCostText]}>₹{m.totalCost?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.actionColumn]}><View style={styles.actionContainer}><TouchableOpacity onPress={() => router.push({ pathname: "/new-measurement/[type]", params: { id, type, editId: m.id }, })} style={styles.editButton}><Ionicons name="pencil" size={14} color="white" /></TouchableOpacity><TouchableOpacity onPress={() => deleteMeasurement(m.id)} style={styles.deleteButton}><Ionicons name="trash" size={14} color="white" /></TouchableOpacity></View></View>
      </View>
    );
  }
  if (type === "curtains") {
    return (
      <View key={m.id} style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
        <View style={[styles.tableCell, styles.snoColumn]}><Text style={styles.cellText}>{index + 1}</Text></View>
        <View style={[styles.tableCell, styles.roomColumn]}><Text style={styles.cellText}>{m.roomLabel || "Untitled"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.width || "-"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.height || "-"}</Text></View>
        <View style={[styles.tableCell, styles.smallColumn]}><Text style={styles.cellText}>{m.pieces || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{m.totalMeters?.toFixed(2) || "-"}</Text></View>
        <View style={[styles.tableCell, styles.typeColumn]}><Text style={styles.cellText}>{m.curtainType || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{m.clothCost?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{m.stitchingCost?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{m.hasLining ? `₹${m.totalLiningCost?.toLocaleString("en-IN")}` : "-"}</Text></View>
        <View style={[styles.tableCell, styles.totalColumn]}><Text style={[styles.cellText, styles.totalCostText]}>₹{m.totalCost?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.actionColumn]}><View style={styles.actionContainer}><TouchableOpacity onPress={() => router.push({ pathname: "/new-measurement/[type]", params: { id, type, editId: m.id }, })} style={styles.editButton}><Ionicons name="pencil" size={14} color="white" /></TouchableOpacity><TouchableOpacity onPress={() => deleteMeasurement(m.id)} style={styles.deleteButton}><Ionicons name="trash" size={14} color="white" /></TouchableOpacity></View></View>
      </View>
    );
  }
  if (type === "blinds") {
    const isRoman = m.blindType && m.blindType.toLowerCase() === "roman blinds";
    return (
      <View key={m.id} style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
        <View style={[styles.tableCell, styles.snoColumn]}><Text style={styles.cellText}>{index + 1}</Text></View>
        <View style={[styles.tableCell, styles.roomColumn]}><Text style={styles.cellText}>{m.roomLabel || "Untitled"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.height || "-"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.width || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{m.totalSqft?.toFixed(2) || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{m.blindsCost?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.typeColumn]}><Text style={styles.cellText}>{m.blindType || "-"}</Text></View>
        <View style={[styles.tableCell, styles.smallColumn]}><Text style={styles.cellText}>{isRoman ? m.part || "-" : "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{isRoman ? (m.clothRequired?.toFixed(2) || "-") : "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{isRoman ? `₹${m.clothCost?.toLocaleString("en-IN")}` : "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{isRoman ? `₹${m.stitchingCost?.toLocaleString("en-IN")}` : "-"}</Text></View>
        <View style={[styles.tableCell, styles.totalColumn]}><Text style={[styles.cellText, styles.totalCostText]}>₹{m.totalCost?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.actionColumn]}><View style={styles.actionContainer}><TouchableOpacity onPress={() => router.push({ pathname: "/new-measurement/[type]", params: { id, type, editId: m.id }, })} style={styles.editButton}><Ionicons name="pencil" size={14} color="white" /></TouchableOpacity><TouchableOpacity onPress={() => deleteMeasurement(m.id)} style={styles.deleteButton}><Ionicons name="trash" size={14} color="white" /></TouchableOpacity></View></View>
      </View>
    );
  }
  if (type === "mosquito-nets") {
    return (
      <View key={m.id} style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
        <View style={[styles.tableCell, styles.snoColumn]}><Text style={styles.cellText}>{index + 1}</Text></View>
        <View style={[styles.tableCell, styles.roomColumn]}><Text style={styles.cellText}>{m.roomLabel || "Untitled"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{getMosquitoWidth()}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{getMosquitoHeight()}</Text></View>
        <View style={[styles.tableCell, styles.typeColumn]}><Text style={styles.cellText}>{m.materialType || "-"}</Text></View>
        <View style={[styles.tableCell, styles.costColumn]}><Text style={styles.cellText}>₹{m.materialRatePerSqft || "0"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{m.totalSqft?.toFixed(2) || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{m.materialCost?.toLocaleString("en-IN") || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{m.customDescription || "-"}</Text></View>
        <View style={[styles.tableCell, styles.actionColumn]}><View style={styles.actionContainer}><TouchableOpacity onPress={() => router.push({ pathname: "/new-measurement/[type]", params: { id, type, editId: m.id }, })} style={styles.editButton}><Ionicons name="pencil" size={14} color="white" /></TouchableOpacity><TouchableOpacity onPress={() => deleteMeasurement(m.id)} style={styles.deleteButton}><Ionicons name="trash" size={14} color="white" /></TouchableOpacity></View></View>
      </View>
    );
  }
  if (type === "wallpapers") {
    // Calculate materialCost and implementationCost if not present
    const squareInches = (parseFloat(m.width) || 0) * (parseFloat(m.height) || 0);
    const squareFeet = squareInches / 144;
    let rolls = squareFeet / 50;
    const decimal = rolls - Math.floor(rolls);
    if (decimal >= 0.3) {
      rolls = Math.ceil(rolls);
    } else {
      rolls = Math.max(1, Math.floor(rolls));
    }
    const materialCost = m.materialCost !== undefined ? m.materialCost : rolls * (parseFloat(m.costPerRoll) || 0);
    const implementationCost = m.implementationCost !== undefined ? m.implementationCost : rolls * (parseFloat(m.implementationCostPerRoll) || 0);
    const totalCost = m.totalCost !== undefined ? m.totalCost : materialCost + implementationCost;
    return (
      <View key={m.id} style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
        <View style={[styles.tableCell, styles.snoColumn]}><Text style={styles.cellText}>{index + 1}</Text></View>
        <View style={[styles.tableCell, styles.roomColumn]}><Text style={styles.cellText}>{m.roomLabel || "Untitled"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.width || "-"}</Text></View>
        <View style={[styles.tableCell, styles.dimensionColumn]}><Text style={styles.cellText}>{m.height || "-"}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>{getWallpaperSqft()}</Text></View>
        <View style={[styles.tableCell, styles.smallColumn]}><Text style={styles.cellText}>{rolls}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{Math.floor(materialCost).toLocaleString("en-IN")}</Text></View>
        <View style={[styles.tableCell, styles.mediumColumn]}><Text style={styles.cellText}>₹{Math.floor(implementationCost).toLocaleString("en-IN")}</Text></View>
        <View style={[styles.tableCell, styles.totalColumn]}><Text style={[styles.cellText, styles.totalCostText]}>₹{Math.floor(totalCost).toLocaleString("en-IN")}</Text></View>
        <View style={[styles.tableCell, styles.actionColumn]}><View style={styles.actionContainer}><TouchableOpacity onPress={() => router.push({ pathname: "/new-measurement/[type]", params: { id, type, editId: m.id }, })} style={styles.editButton}><Ionicons name="pencil" size={14} color="white" /></TouchableOpacity><TouchableOpacity onPress={() => deleteMeasurement(m.id)} style={styles.deleteButton}><Ionicons name="trash" size={14} color="white" /></TouchableOpacity></View></View>
      </View>
    );
  }
  return null;
};

// SummaryRow component
const SummaryRow = ({ type, measurements, styles }) => {
  // Helper functions for summary logic
  const getTotal = (key) => measurements.reduce((sum, m) => sum + (parseFloat(m[key]) || 0), 0);
  const getBlindsTotal = () => measurements.reduce((sum, m) => sum + (parseFloat(m.totalCost) || 0), 0);
  const getWallpaperRollsTotal = () => measurements.reduce((sum, m) => {
    const squareInches = (parseFloat(m.width) || 0) * (parseFloat(m.height) || 0);
    const squareFeet = squareInches / 144;
    let rolls = squareFeet / 50;
    const decimal = rolls - Math.floor(rolls);
    if (decimal >= 0.3) {
      rolls = Math.ceil(rolls);
    } else {
      rolls = Math.max(1, Math.floor(rolls));
    }
    return sum + rolls;
  }, 0);
  return (
    <View style={styles.summaryRow}>
      {type === "flooring" ? (
        <>
          <View style={[styles.tableCell, styles.snoColumn]}>
            <Text style={styles.summaryText}>Total</Text>
          </View>
          <View style={[styles.tableCell, styles.roomColumn]}>
            <Text style={styles.summaryText}>({measurements.length} rooms)</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>{getTotal("totalSqft").toFixed(2)}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("costOfRoom").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("layingCharge").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.totalColumn]}>
            <Text style={styles.summaryTotalText}>₹{getTotal("totalCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.actionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
        </>
      ) : type === "curtains" ? (
        <>
          <View style={[styles.tableCell, styles.snoColumn]}>
            <Text style={styles.summaryText}>Total</Text>
          </View>
          <View style={[styles.tableCell, styles.roomColumn]}>
            <Text style={styles.summaryText}>({measurements.length} rooms)</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.smallColumn]}>
            <Text style={styles.summaryText}>{getTotal("pieces").toFixed(1)}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>{getTotal("totalMeters").toFixed(2)}</Text>
          </View>
          <View style={[styles.tableCell, styles.typeColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("clothCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("stitchingCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("totalLiningCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.totalColumn]}>
            <Text style={styles.summaryTotalText}>₹{getTotal("totalCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.actionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
        </>
      ) : type === "blinds" ? (
        <>
          <View style={[styles.tableCell, styles.snoColumn]}>
            <Text style={styles.summaryText}>Total</Text>
          </View>
          <View style={[styles.tableCell, styles.roomColumn]}>
            <Text style={styles.summaryText}>({measurements.length} rooms)</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>{getTotal("totalSqft").toFixed(2)}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("blindsCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.typeColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.smallColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.totalColumn]}>
            <Text style={styles.summaryTotalText}>₹{getBlindsTotal().toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.actionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
        </>
      ) : type === "mosquito-nets" ? (
        <>
          <View style={[styles.tableCell, styles.snoColumn]}>
            <Text style={styles.summaryText}>Total</Text>
          </View>
          <View style={[styles.tableCell, styles.roomColumn]}>
            <Text style={styles.summaryText}>({measurements.length} rooms)</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.typeColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.costColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>{getTotal("totalSqft").toFixed(2)}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("materialCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.actionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
        </>
      ) : type === "wallpapers" ? (
        <>
          <View style={[styles.tableCell, styles.snoColumn]}>
            <Text style={styles.summaryText}>Total</Text>
          </View>
          <View style={[styles.tableCell, styles.roomColumn]}>
            <Text style={styles.summaryText}>({measurements.length} rooms)</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.dimensionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>{getTotal("totalSqft").toFixed(2)}</Text>
          </View>
          <View style={[styles.tableCell, styles.smallColumn]}>
            <Text style={styles.summaryText}>{getWallpaperRollsTotal()}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("materialCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.mediumColumn]}>
            <Text style={styles.summaryText}>₹{getTotal("implementationCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.totalColumn]}>
            <Text style={styles.summaryTotalText}>₹{getTotal("totalCost").toLocaleString("en-IN")}</Text>
          </View>
          <View style={[styles.tableCell, styles.actionColumn]}>
            <Text style={styles.summaryText}>-</Text>
          </View>
        </>
      ) : null}
    </View>
  );
};

function renderTable({ type, measurements, id, router, deleteMeasurement, styles }) {
  return (
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <TableHeader type={type} />
      </View>
      {measurements.map((m, index) => (
        <TableRow
          key={m.id}
          type={type}
          m={m}
          index={index}
          id={id}
          router={router}
          deleteMeasurement={deleteMeasurement}
          styles={styles}
        />
      ))}
      <SummaryRow type={type} measurements={measurements} styles={styles} />
    </View>
  );
}

export default function InteriorMeasurements() {
  const { id, type } = useLocalSearchParams();
  const [project, setProject] = useState(null);
  const [measurements, setMeasurements] = useState([]);

  const loadProject = useCallback(async () => {
    try {
      const projectsData = await AsyncStorage.getItem("projects");
      if (projectsData) {
        const projects = JSON.parse(projectsData);
        const currentProject = projects.find((p) => p.id === id);
        if (currentProject) {
          setProject(currentProject);
          setMeasurements(
            currentProject?.measurements?.filter(
              (m) => m.interiorType === type
            ) || []
          );
        } else {
          Alert.alert("Error", "Project not found");
          router.back();
        }
      }
    } catch (error) {
      console.error("Error loading project:", error);
    }
  }, [id, type]);

  // Use useFocusEffect to reload data when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadProject();
    }, [loadProject])
  );

  const deleteMeasurement = async (measurementId) => {
    Alert.alert(
      "Delete Measurement",
      "Are you sure you want to delete this measurement?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              const projectsData = await AsyncStorage.getItem("projects");
              const projects = JSON.parse(projectsData);
              const projectIndex = projects.findIndex((p) => p.id === id);
              if (projectIndex !== -1) {
                projects[projectIndex].measurements = projects[
                  projectIndex
                ].measurements.filter((m) => m.id !== measurementId);
                await AsyncStorage.setItem(
                  "projects",
                  JSON.stringify(projects)
                );
                loadProject(); // Reload the data
              }
            } catch (error) {
              console.error("Error deleting measurement:", error);
            }
          },
        },
      ]
    );
  };

  const getInteriorTypeLabel = () => {
    return INTERIOR_SCHEMAS[type]?.label || type;
  };


  if (!project) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>{project.clientName}</Text>
          <Text style={styles.headerSubtitle}>
            {getInteriorTypeLabel()} • {measurements.length}{" "}
            {measurements.length === 1 ? "measurement" : "measurements"}
          </Text>
        </View>
      </View>
      {/* Measurements Table */}
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.tableContainer}>
          {measurements.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="document-outline" size={64} color="#9CA3AF" />
              <Text style={styles.emptyMessage}>No measurements yet</Text>
              <Text style={styles.emptySubMessage}>
                Add your first measurement to get started
              </Text>{" "}
              <View style={styles.emptyHint}>
                <Text style={styles.emptyHintText}>
                  💡 Tip: Use the button below to add your first{" "}
                  {getInteriorTypeLabel().toLowerCase()} measurement
                </Text>
              </View>
            </View>
          ) : (
            <>
              {/* Scroll hint for complex tables */}
              {(type === "curtains" || type === "wallpapers") && (
                <View style={styles.scrollHint}>
                  <Ionicons name="arrow-forward" size={16} color="#64748b" />
                  <Text style={styles.scrollHintText}>
                    Scroll horizontally to view all columns
                  </Text>
                </View>
              )}
              {renderTable({ type, measurements, id, router, deleteMeasurement, styles })}
            </>
          )}
        </View>
      </ScrollView>
      {/* Add Measurement Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          router.push({
            pathname: "/new-measurement/[type]",
            params: { id, type },
          })
        }
      >
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add Measurement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    color: COLORS.textInverse,
    fontSize: 20,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: COLORS.accentLight,
    fontSize: 14,
    marginTop: 2,
  },
  pdfHeaderButton: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 8,
    marginLeft: 12,
    elevation: 2,
  },
  scrollView: {
    flex: 1,
  },
  tableContainer: {
    padding: 16,
    minWidth: "100%",
  },
  table: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    elevation: 3,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  tableHeaderCell: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryLight,
  },
  headerText: {
    color: COLORS.textInverse,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    minHeight: 60,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  summaryRow: {
    flexDirection: "row",
    minHeight: 50,
    backgroundColor: COLORS.gray100,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary,
  },
  evenRow: {
    backgroundColor: COLORS.background,
  },
  oddRow: {
    backgroundColor: COLORS.surface,
  },
  tableCell: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
  },
  cellText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: "center",
    fontWeight: "500",
  },
  costText: {
    color: COLORS.success,
    fontWeight: "600",
  },
  totalCostText: {
    color: COLORS.error,
    fontWeight: "bold",
    fontSize: 13,
  },
  summaryText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: "center",
    fontWeight: "600",
  },
  summaryTotalText: {
    fontSize: 13,
    color: COLORS.error,
    textAlign: "center",
    fontWeight: "bold",
  },

  // Circled pieces for one part curtains
  circledPieces: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
  },
  normalPieces: {
    justifyContent: "center",
    alignItems: "center",
  },
  circledText: {
    color: "white",
    fontWeight: "bold",
  },

  // Column widths - adjusted for better proportions
  roomColumn: {
    width: 100,
  },
  dimensionColumn: {
    width: 65,
  },
  typeColumn: {
    width: 90,
  },
  smallColumn: {
    width: 55,
  },
  mediumColumn: {
    width: 75,
  },
  costColumn: {
    width: 80,
  },
  totalColumn: {
    width: 95,
  },
  actionColumn: {
    width: 85,
    borderRightWidth: 0,
  },
  snoColumn: {
    width: 40,
  },

  actionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  editButton: {
    backgroundColor: "#3b82f6",
    padding: 8,
    borderRadius: 6,
    elevation: 2,
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    padding: 8,
    borderRadius: 6,
    elevation: 2,
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  // Empty state
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emptyMessage: {
    fontSize: 18,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
  emptySubMessage: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
    lineHeight: 20,
  },
  emptyHint: {
    backgroundColor: "#f0f9ff",
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6",
  },
  emptyHintText: {
    fontSize: 12,
    color: "#1e40af",
    textAlign: "center",
    fontStyle: "italic",
  },

  // Scroll hint
  scrollHint: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f5f9",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
  },
  scrollHintText: {
    fontSize: 12,
    color: "#64748b",
    marginLeft: 4,
    fontStyle: "italic",
  },

  // Add button
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    margin: 16,
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  addButtonText: {
    color: COLORS.textInverse,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },

  // Centered loading/error state
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  // Remove unused styles
  totalCostCell: {
    fontWeight: "bold",
    color: "#059669",
  },
  infoColumn: {
    width: 70,
  },
  measurementCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  measurementHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  measurementRoom: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    flex: 1,
  },
  measurementActions: {
    flexDirection: "row",
    gap: 8,
  },
  measurementDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  measurementText: {
    fontSize: 14,
    color: "#374151",
  },
  measurementCost: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#059669",
  },
});
