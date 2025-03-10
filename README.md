# Decentralized Renewable Energy Certificates (RECs)

## Overview

This project implements a blockchain-based platform for issuing, trading, and retiring Renewable Energy Certificates (RECs). By leveraging smart contracts, we provide a transparent, efficient, and tamper-proof system that reduces fraud, eliminates intermediaries, and increases market liquidity for renewable energy credits.

## Smart Contracts

### 1. REC Issuance Contract

Creates and validates certificates for verified renewable energy production.

**Key Features:**
- Automated certificate generation based on energy production data
- Verification of renewable energy source and generation data
- Unique identification and tracking of each REC
- Integration with energy monitoring systems and IoT devices
- Support for multiple renewable sources (solar, wind, hydro, biomass, etc.)
- Metadata including location, technology type, and generation timestamps

### 2. Trading Contract

Facilitates the buying, selling, and transfer of RECs between market participants.

**Key Features:**
- Peer-to-peer trading capabilities
- Order book management
- Auction mechanisms for REC sales
- Price discovery and market-making functions
- Automated clearing and settlement
- History of ownership and price changes
- Integration with fiat and cryptocurrency payment systems

### 3. Retirement Contract

Manages the permanent removal of RECs from circulation after they have been used to meet renewable energy goals.

**Key Features:**
- Permanent locking of retired certificates
- Validation of retirement claims
- Retirement documentation and certification
- Customizable retirement reasons (regulatory compliance, voluntary goals, etc.)
- Batch retirement capabilities for large portfolio management
- Retirement verification and reporting

### 4. Compliance Tracking Contract

Monitors and reports on adherence to renewable energy mandates and voluntary commitments.

**Key Features:**
- Automated compliance calculation against targets
- Regulatory reporting generation
- Real-time compliance status tracking
- Multi-jurisdiction support for different regulatory schemes
- Alerting for upcoming compliance deadlines
- Historical compliance record maintenance
- API integration with regulatory systems

## Getting Started

### Prerequisites
- Node.js (v16+)
- Solidity compiler (v0.8+)
- Truffle or Hardhat development environment
- Web3 provider (Infura, Alchemy, etc.)
- MetaMask or similar wallet for testing
- Access to an Ethereum network (mainnet, testnet, or local)

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/decentralized-recs.git
   cd decentralized-recs
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Compile smart contracts:
   ```
   npx truffle compile
   ```
   or
   ```
   npx hardhat compile
   ```

4. Deploy to your chosen network:
   ```
   npx truffle migrate --network <network_name>
   ```
   or
   ```
   npx hardhat run scripts/deploy.js --network <network_name>
   ```

## Usage Examples

### Renewable Energy Producer
```javascript
// Issue new RECs based on energy production
await issuanceContract.issueREC(
  "SolarFarmAlpha", 
  1000, // kWh produced
  "Solar", 
  "California", 
  1648166400, // timestamp of generation
  {from: producerAddress}
);
```

### REC Buyer/Seller
```javascript
// List RECs for sale
await tradingContract.createSellOrder(
  ["REC_ID_1", "REC_ID_2"],
  5, // price per REC in tokens
  {from: sellerAddress}
);

// Purchase RECs
await tradingContract.createBuyOrder(
  10, // number of RECs
  6, // maximum price willing to pay per REC
  {from: buyerAddress}
);
```

### REC Consumer
```javascript
// Retire RECs for compliance or voluntary use
await retirementContract.retireRECs(
  ["REC_ID_1", "REC_ID_2"],
  "Compliance with California RPS",
  2023, // compliance year
  {from: consumerAddress}
);
```

### Compliance Manager
```javascript
// Check compliance status
const complianceStatus = await complianceContract.checkCompliance(
  organizationAddress,
  "California RPS",
  2023
);
```

## API Integration

The platform provides RESTful APIs for integration with existing energy management systems, corporate sustainability software, and regulatory reporting tools. Key endpoints include:

- `/api/v1/recs/issue` - Create new RECs from generation data
- `/api/v1/recs/trade` - Access trading functionality
- `/api/v1/recs/retire` - Retire RECs and generate proof
- `/api/v1/compliance/report` - Generate compliance reports

## Security Considerations

- All smart contracts have undergone security audits by [Audit Firm Name]
- Multi-signature requirements for administrative functions
- Time-locked upgrades for contract modifications
- Real-time monitoring for suspicious activities
- Regular vulnerability assessments

## Contributing

We welcome contributions to improve the Decentralized RECs platform:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

## Acknowledgments

- Energy Web Foundation
- Renewable Energy Buyers Alliance
- International Renewable Energy Agency (IRENA)
- Various renewable energy regulatory bodies
