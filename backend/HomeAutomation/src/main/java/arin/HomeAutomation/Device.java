package arin.HomeAutomation;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "devices")
public class Device {

  @Id
  private String id;

  private String name;
  private String type;

  private String status;

  public Device(String id, String name, String type, String status) {
    this.setId(id);
    this.setName(name);
    this.setType(type);
    this.setStatus(status);
  }

  private void setId(String id) {
    this.id = id;
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setName(String name) {
    this.name = name;
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setType(String type) {
    this.type = type;
  }

  // ------------------------------------------------------------------------------------------------------------------

  public void setStatus(String status) {
    this.status = status;
  }

  // ------------------------------------------------------------------------------------------------------------------

  public String getId() {
    return this.id;
  }

  // ------------------------------------------------------------------------------------------------------------------

  public String getName() {
    return this.name;
  }

  // ------------------------------------------------------------------------------------------------------------------

  public String getType() {
    return this.type;
  }

  // ------------------------------------------------------------------------------------------------------------------

  public String getStatus() {
    return this.status;
  }

  // ------------------------------------------------------------------------------------------------------------------

  public void setNewStatus(String status) {
    this.checkType(status);
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void checkType(String status) {
    if (this.type.equalsIgnoreCase("light")) {
      this.setLightStatus(status);
    }

    if (this.type.equalsIgnoreCase("curtain")) {
      this.setCurtainStatus(status);
    }

    if (this.type.equalsIgnoreCase("plantWaterer")) {
      this.setPlantWatererStatus(status);
    }

    if (this.type.equalsIgnoreCase("door")) {
      this.setDoorStatus(status);
    }

    if (this.type.equalsIgnoreCase("bin")) {
      this.setBinStatus(status);
    }
    if (this.type.equalsIgnoreCase("gas")) {
      this.setGasStatus(status);
    }
    if (this.type.equalsIgnoreCase("lightdetector")) {
      this.setLightDetector(status);
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setLightStatus(String status) {
    if (this.status.equalsIgnoreCase("on")) {
      this.status = "off";
    } else {
      this.status = "on";
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setCurtainStatus(String status) {
    if (this.status.equalsIgnoreCase("open")) {
      this.status = "close";
    } else {
      this.status = "open";
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setPlantWatererStatus(String status) {
    if (this.status.equalsIgnoreCase("on")) {
      this.status = "off";
    } else {
      this.status = "on";
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setBinStatus(String status) {
    if (this.status.equalsIgnoreCase("on")) {
      this.status = "off";
    } else {
      this.status = "on";
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setDoorStatus(String status) {
    if (this.status.equalsIgnoreCase("on")) {
      this.status = "off";
    } else {
      this.status = "on";
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setGasStatus(String status) {
    if (this.status.equalsIgnoreCase("on")) {
      this.status = "off";
    } else {
      this.status = "on";
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  private void setLightDetector(String status) {
    if (this.status.equalsIgnoreCase("on")) {
      this.status = "off";
    } else {
      this.status = "on";
    }
  }
}
