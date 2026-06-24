public class Computer {
    private String cpu;
    private String ram;
    private String storage;
    private String graphicsCard;

    private Computer(Builder builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
    }

    public static class Builder {
        private String cpu;
        private String ram;
        private String storage;
        private String graphicsCard;

        public Builder setCpu(String cpu) { this.cpu = cpu; return this; }
        public Builder setRam(String ram) { this.ram = ram; return this; }
        public Builder setStorage(String storage) { this.storage = storage; return this; }
        public Builder setGraphicsCard(String graphicsCard) { this.graphicsCard = graphicsCard; return this; }
        public Computer build() { return new Computer(this); }
    }

    public String toString() {
        return "Computer{cpu='" + cpu + "', ram='" + ram + "', storage='" + storage + "', graphicsCard='" + graphicsCard + "'}";
    }
}
