package arin.HomeAutomation;

public class Light extends Device {

  public Light(
    String id,
    String name,
    String type,
    String status,
    String turnOn,
    String turnOff,
    String countOn
  ) {
    super(id, name, type, status, turnOn, turnOff, countOn);
  }
}
