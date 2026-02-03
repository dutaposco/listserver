import './App.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ServerDetail from './components/ServerDetail';


const servers = [
  { id: 1, name: "KP1HMI39", ipAddress: "172.21.86.39", location: "Computer Room", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 2, name: "KP1HMI131", ipAddress: "172.21.86.131", location: "Computer Room", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 3, name: "KP1HMI45", ipAddress: "172.21.86.45", location: "CB EER", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: false, timesyncStatus: "synced" },
  { id: 4, name: "KP1HMI150", ipAddress: "172.21.86.150", location: "CB P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 5, name: "KP1HMI47", ipAddress: "172.21.86.47", location: "CS P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 6, name: "KP1HMI48", ipAddress: "172.21.86.48", location: "CS P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 7, name: "KP1HMI50", ipAddress: "172.21.86.50", location: "DSS P/P", status: "online", hmiVersion: "91124", alyacPatched: false, hmiUpdated: false, timesyncStatus: "synced" },
  { id: 8, name: "KP1HMI65", ipAddress: "172.21.86.65", location: "DSS P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 9, name: "KP1HMI71", ipAddress: "172.21.86.71", location: "DSS P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 10, name: "KP1HMI44", ipAddress: "172.21.86.44", location: "DS P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: false, timesyncStatus: "synced" },
  { id: 11, name: "KP1HMI51", ipAddress: "172.21.86.51", location: "SHEARING EER", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 12, name: "KP1HMI144", ipAddress: "172.21.86.144", location: "SHEARING OFFICE", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 13, name: "KP1HMI56", ipAddress: "172.21.86.56", location: "MARKING P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 14, name: "KP1HMI52", ipAddress: "172.21.86.52", location: "TOP INS P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 15, name: "KP1HMI53", ipAddress: "172.21.86.53", location: "OUT INS P/P", status: "online", hmiVersion: "-", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 16, name: "KP1HMI54", ipAddress: "172.21.86.54", location: "BOT INS P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: false, timesyncStatus: "synced" },
  { id: 17, name: "KP1HMI57", ipAddress: "172.21.86.57", location: "T1 P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },
  { id: 18, name: "KP1HMI58", ipAddress: "172.21.86.58", location: "CL P/P", status: "online", hmiVersion: "91124", alyacPatched: true, hmiUpdated: true, timesyncStatus: "synced" },

  // PL1 servers (172.21.80.x)
  { id: 101, name: "PL1HSVR1", ipAddress: "172.21.80.201", location: "Data Center", status: "online", cpu: "1", memory: "65GB", drives: { C: "32 / 476 GB", D: "231 / 1720 GB", E: "235 / 1720 GB", F: "—" } },
  { id: 102, name: "PL1HSVR2", ipAddress: "172.21.80.202", location: "Data Center", status: "backup", cpu: "1", memory: "65GB", drives: { C: "85 / 278 GB", D: "232 / 278 GB", E: "—", F: "—" } },
  { id: 103, name: "PL1HSVR3", ipAddress: "172.21.80.203", location: "Data Center", status: "online", cpu: "1", memory: "65GB", drives: { C: "35 / 278 GB", D: "87 / 1720 GB", E: "233 / 1720 GB", F: "—" } },
  { id: 104, name: "PL1HSVR4", ipAddress: "172.21.80.204", location: "Data Center", status: "backup", cpu: "1", memory: "65GB", drives: { C: "35 / 278 GB", D: "256 / 476 GB", E: "—", F: "—" } },

  { id: 111, name: "PL1PSVR1", ipAddress: "172.21.80.81", location: "Data Center", status: "online", cpu:"1" , memory:"65GB" , drives:{ C:"220 / 278 GB" , D:"141 / 278 GB" , E:"123 / 278 GB" , F:"188 / 278 GB" } },
  { id: 112, name: "PL1PSVR2", ipAddress: "172.21.80.82", location: "Data Center", status: "backup", cpu: "1", memory: "65GB", drives: { C: "94 / 278 GB", D: "79 / 278 GB", E: "—", F: "—" } },
  { id: 113, name: "PL1PSVR3", ipAddress: "172.21.80.84", location: "Data Center", status: "online", cpu: "1", memory: "65GB", drives: { C: "94 / 278 GB", D: "163 / 278 GB", E: "—", F: "—" } },
  { id: 114, name: "PL1PSVR4", ipAddress: "172.21.80.85", location: "Data Center", status: "backup", cpu: "1", memory: "65GB", drives: { C: "130 / 278 GB", D: "165 / 278 GB", E: "143 / 278 GB", F:"—" } },

  { id: 121, name: "WIN-LC7PL3SG9VN", ipAddress: "172.21.80.87", location: "Data Center", status: "online", cpu:"1" , memory:"12GB" , drives:{ C:"83 / 349 GB" , D:"8 / 107 GB" , E:"242 / 496 GB" , F:"33 / 371 GB" } },
  { id: 122, name: "PM-MACC-MCMI", ipAddress: "172.21.80.88", location: "Data Center", status:"online" , cpu:"1" , memory:"10GB" , drives:{ C:"22 / 305 GB" , D:"10 / 305 GB" , E:"—" , F:"—" } }
];

function AppContent() {
  const [selectedServer, setSelectedServer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to get status badge color
  const getStatusColor = (status) => {
    return status === 'online' ? '#00eaff' : '#ff4444';
  };

  // Filter servers based on search query
  const filteredServers = servers.filter(server =>
    server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    server.ipAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
    server.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group servers for display: Shearing (.86) and others (e.g., PL1 .80)
  const shearingServers = filteredServers.filter(s => s.ipAddress.includes('.86.'));
  const otherServers = filteredServers.filter(s => !s.ipAddress.includes('.86.'));

  return (
    <>
      {selectedServer ? (
        <ServerDetail 
          collection={selectedServer} 
          onBack={() => setSelectedServer(null)}
        />
      ) : (
        <>
          <div className="gradient-overlay"></div>
          <div className="App">
            {/* Navbar */}
            <nav className="navbar">
              <div className="navbar-container">
                <a href="#" className="nav-logo">
                  <div className="nav-logo-photo">
                    🖥️ Server Management
                  </div>
                </a>
                <div className="nav-right" style={{ marginLeft: 'auto' }}>
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Search by name, IP, or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="search-input"
                      style={{
                        padding: '0.7rem 1rem',
                        borderRadius: '8px',
                        border: '2px solid rgba(0, 234, 255, 0.3)',
                        backgroundColor: 'rgba(0, 234, 255, 0.05)',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        minWidth: '250px',
                        boxShadow: '0 0 20px rgba(0, 234, 255, 0.1)'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#00eaff';
                        e.target.style.boxShadow = '0 0 20px rgba(0, 234, 255, 0.3)';
                        e.target.style.backgroundColor = 'rgba(0, 234, 255, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(0, 234, 255, 0.3)';
                        e.target.style.boxShadow = '0 0 20px rgba(0, 234, 255, 0.1)';
                        e.target.style.backgroundColor = 'rgba(0, 234, 255, 0.05)';
                      }}
                    />
                    <span style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#00eaff',
                      pointerEvents: 'none'
                    }}>
                      🔍
                    </span>
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '3rem 2rem'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '2rem' }}
              >
                <h1 style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #00eaff 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  🖥️ Automation Servers
                </h1>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1rem'
                }}>
                  Shearing Line Production Servers & Infrastructure ({filteredServers.length} servers)
                </p>
              </motion.div>

              {/* Servers Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  overflowX: 'auto',
                  borderRadius: '12px',
                  border: '2px solid rgba(0, 234, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.95rem'
                }}>
                  <thead>
                    <tr style={{
                      borderBottom: '2px solid rgba(0, 234, 255, 0.2)',
                      backgroundColor: 'rgba(0, 234, 255, 0.05)'
                    }}>
                      <th style={{
                        padding: '1.2rem',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#00eaff',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '1px'
                      }}>Status</th>
                      <th style={{
                        padding: '1.2rem',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#00eaff',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '1px'
                      }}>PC Name</th>
                      <th style={{
                        padding: '1.2rem',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#00eaff',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '1px'
                      }}>IP Address</th>
                      <th style={{
                        padding: '1.2rem',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#00eaff',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '1px'
                      }}>Location</th>
                      <th style={{
                        padding: '1.2rem',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#00eaff',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '1px'
                      }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredServers.length === 0 && (
                      <tr>
                        <td colSpan="5" style={{
                          padding: '2rem',
                          textAlign: 'center',
                          color: 'rgba(255, 255, 255, 0.5)'
                        }}>
                          No servers found matching "{searchQuery}"
                        </td>
                      </tr>
                    )}

                    {/* Shearing Line servers (.86) */}
                    {shearingServers.map((server, index) => (
                      <motion.tr
                        key={server.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                        style={{
                          borderBottom: '1px solid rgba(0, 234, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                      >
                        <td style={{ padding: '1.2rem', fontWeight: '500' }}>
                          <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: '6px', backgroundColor: getStatusColor(server.status) + '22', color: getStatusColor(server.status), fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', border: `1px solid ${getStatusColor(server.status)}55` }}>
                            {server.status === 'online' ? '🟢 ONLINE' : '🔴 OFFLINE'}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem', fontWeight: '600', color: '#fff' }}>{server.name}</td>
                        <td style={{ padding: '1.2rem', color: '#00eaff', fontFamily: 'monospace', fontSize: '0.9rem' }}>{server.ipAddress}</td>
                        <td style={{ padding: '1.2rem', color: 'rgba(255, 255, 255, 0.8)' }}>{server.location}</td>
                        <td style={{ padding: '1.2rem', textAlign: 'center' }}>
                          <button onClick={() => setSelectedServer(server)} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(0, 234, 255, 0.2)', border: '1px solid #00eaff', borderRadius: '6px', color: '#00eaff', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>View Details</button>
                        </td>
                      </motion.tr>
                    ))}

                    {/* Separator for PL1 / other networks */}
                    {otherServers.length > 0 && (
                      <tr>
                        <td colSpan="5" style={{ padding: '0.5rem 1rem', textAlign: 'center' }}>
                          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 0' }} />
                          <strong style={{ color: 'rgba(255,255,255,0.8)' }}>PL1 / Other Servers</strong>
                          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 0' }} />
                        </td>
                      </tr>
                    )}

                    {/* Other servers (e.g., 172.21.80.x) */}
                    {otherServers.map((server, idx) => (
                      <motion.tr
                        key={server.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        style={{ borderBottom: '1px solid rgba(0, 234, 255, 0.1)', transition: 'all 0.3s ease', backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                      >
                        <td style={{ padding: '1.2rem', fontWeight: '500' }}>
                          <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: '6px', backgroundColor: getStatusColor(server.status) + '22', color: getStatusColor(server.status), fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', border: `1px solid ${getStatusColor(server.status)}55` }}>
                            {server.status === 'online' ? '🟢 ONLINE' : '🔴 OFFLINE'}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem', fontWeight: '600', color: '#fff' }}>{server.name}</td>
                        <td style={{ padding: '1.2rem', color: '#00eaff', fontFamily: 'monospace', fontSize: '0.9rem' }}>{server.ipAddress}</td>
                        <td style={{ padding: '1.2rem', color: 'rgba(255, 255, 255, 0.8)' }}>{server.location}</td>
                        <td style={{ padding: '1.2rem', textAlign: 'center' }}>
                          <button onClick={() => setSelectedServer(server)} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(0, 234, 255, 0.2)', border: '1px solid #00eaff', borderRadius: '6px', color: '#00eaff', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>View Details</button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>

            <footer className="footer">
              <p>&copy; 2025 Automation Servers - Sharing Line. All rights reserved. | Server Management System</p>
            </footer>
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
