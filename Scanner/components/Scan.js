import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from './AuthContext';

export default function ScannerQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [failureModalVisible, setFailureModalVisible] = useState(false);
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    if (user?.username === "Dandi Hendika") {
      setFailureModalVisible(true);
      setTimeout(() => {
        setFailureModalVisible(false);
        setScanned(false); // Allow rescan after failure
      }, 3000); // Hide modal after 3 seconds
    } else {
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate("User", { scannedData: data }); // Navigate to UserScreen with scanned data
      }, 3000); // Hide modal after 3 seconds and navigate
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <TouchableOpacity onPress={() => setScanned(false)} style={styles.btn}>
          <Ionicons name={"qr-code-outline"} size={34} />
          <Text style={styles.btn_label}>Tap to Scan Again</Text>
        </TouchableOpacity>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Anda Telah Berhasil Absen</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={failureModalVisible}
        onRequestClose={() => {
          setFailureModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Anda Gagal Absen</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setFailureModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btn_label: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
