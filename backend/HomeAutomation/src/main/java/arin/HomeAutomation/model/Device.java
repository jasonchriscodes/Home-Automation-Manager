package arin.HomeAutomation.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "devices")
public class Device {

  @Id
  private String deviceId;

  private String deviceName;
  private String room;
  private String device;
  private boolean status;
}
