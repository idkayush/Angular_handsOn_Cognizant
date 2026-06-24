public class BuilderTest {
    public static void main(String[] args) {
        Computer officePc = new Computer.Builder().setCpu("Intel i5").setRam("16GB").setStorage("512GB SSD").build();
        Computer gamingPc = new Computer.Builder().setCpu("Intel i9").setRam("32GB").setStorage("1TB SSD").setGraphicsCard("RTX 4070").build();
        System.out.println(officePc);
        System.out.println(gamingPc);
    }
}
