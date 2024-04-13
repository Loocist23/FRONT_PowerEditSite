import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Card from '../components/Card';

const User = () => {
  const [jsonFileData, setJsonFileData] = useState(null);

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const fileAsText = reader.result;
          const data = JSON.parse(fileAsText);
          setJsonFileData(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsText(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <h1>Page de l'utilisateur</h1>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Glissez-déposez un fichier JSON ici, ou cliquez pour sélectionner un fichier</p>
      </div>
      {jsonFileData && (
        <div>
          <Card title="Informations de l'utilisateur" data={{
            "Username": jsonFileData["Username"],
            "Admin": jsonFileData["Administrator"],
          }} />
          <Card title="Informations du CPU" data={{
            "CPU": jsonFileData["CPU"],
            "Number Of Cores": jsonFileData["CPU Cores"],
            "Number Of Threads": jsonFileData["CPU Threads"],
            "Frequency": jsonFileData["CPU Frequency"],
            "Architecture": jsonFileData["CPU Architecture"],
            "L2 Cache Size": jsonFileData["CPU L2 Cache Size"],
            "L3 Cache Size": jsonFileData["CPU L3 Cache Size"],
            "Socket": jsonFileData["CPU Socket"],
            "Virtualization": jsonFileData["CPU Virtualization"],
          }} />
          <Card title="Informations du GPU" data={{
            "GPU": jsonFileData["GPU"],
            "GPU VRAM": jsonFileData["GPU VRAM"],
            "GPU Driver Version": jsonFileData["GPU Driver Version"],
            "GPU Driver Date": jsonFileData["GPU Driver Date"]
          }} />
          <Card title="Informations de la RAM" data={{
            "RAM Manufacturer": jsonFileData["RAM Manufacturer"],
            "Total RAM Amount": jsonFileData["Total RAM Amount"],
            "RAM Speed": jsonFileData["RAM Frequency"],
            "RAM Channel": jsonFileData["RAM Channel"],
            "RAM Slot": jsonFileData["RAM Slot"],
          }} />
          <Card title="Informations de stockage" data={{
            "Drive": jsonFileData["Disks Type"],
            "Total Size": jsonFileData["Total Disk Space"],
            "Free Size": jsonFileData["Total Free Space"],
            "Disks Health": jsonFileData["Disks Health"],
            "Disks Partitions": jsonFileData["Disks Partitions"],
          }} />
          <Card title="Informations de l'ordinateur" data={{
            "Computer Manufacturer": jsonFileData["Computer Manufacturer"],
            "Computer Model": jsonFileData["Computer Model"],
            "Computer Serial": jsonFileData["Computer S/N"],
            "BIOS Version": jsonFileData["BIOS Version"],
            "Computer Name": jsonFileData["Computer Name"]
          }} />
          <Card title="Informations du système d'exploitation" data={{
            "OS": jsonFileData["OS"],
            "OS Version": jsonFileData["OS Version"],
            "OS Architecture": jsonFileData["OS Architecture"]
          }} />
          <Card title={"Information Reseau"} data={{
            "Domain": jsonFileData["Domain"],
            "IP Address": jsonFileData["IP Address"],
            "MAC Address": jsonFileData["MAC Address"],
            "DNS": jsonFileData["DNS"],
            "DHCP": jsonFileData["DHCP"],
            "Gateway": jsonFileData["Gateway"],
            "Printers": jsonFileData["Printers"],
          }} />
          <Card title={"Information Divers"} data={{
            "Network Drives": jsonFileData["Network Drives"],
            "Bitlocker Encryption": jsonFileData["Bitlocker Encryption"],
            "Active Antivirus": jsonFileData["Active Antivirus"],
            "Other Antivirus": jsonFileData["Other Antivirus"],
            "Office Version": jsonFileData["Office Version"],
            "System Install Date": jsonFileData["System Install Date"],
            "Scan Date": jsonFileData["Scan Date"],
            "Scan ID": jsonFileData["Scan ID"]
          }} />
        </div>
      )}
    </div>
  );
};

export default User;