package arin.HomeAutomation;

public class Bin extends Device {

  public Bin(
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
