import React from 'react';
import { motion } from 'framer-motion';

const ServerDetail = ({ collection, onBack }) => {
  const server = collection;

  const getStatusColor = (status) => {
    return status === 'online' ? '#00eaff' : '#ff4444';
  };

  const getStatusBadgeColor = (status) => {
    return status ? '#00ff88' : '#ff4444';
  };

  return (
    <>
      <div className="gradient-overlay"></div>
      <div className="App">
        {/* Back Navigation */}
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000
        }}>
          <button
            onClick={onBack}
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgba(0, 234, 255, 0.2)',
              border: '2px solid #00eaff',
              borderRadius: '8px',
              color: '#00eaff',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 234, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ← Back
          </button>
        </div>

        {/* Server Detail */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          paddingTop: '6rem'
        }}>
          {/* Server Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              maxWidth: '900px',
              width: '100%',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: `2px solid ${getStatusColor(server.status)}`,
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              🖥️
            </div>
            
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              margin: '0 0 0.5rem 0'
            }}>
              {server.name}
            </h1>

            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              backgroundColor: getStatusColor(server.status) + '22',
              border: `2px solid ${getStatusColor(server.status)}`,
              marginBottom: '1rem'
            }}>
              <span style={{ color: getStatusColor(server.status), fontWeight: 'bold', fontSize: '1rem' }}>
                {server.status === 'online' ? '🟢 ONLINE' : '🔴 OFFLINE'}
              </span>
            </div>

            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '1rem 0'
            }}>
              {server.location}
            </p>
          </motion.div>

          {/* Basic Information Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              maxWidth: '900px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            {/* IP Address Card */}
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(0, 234, 255, 0.3)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>IP Address</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0, color: '#00eaff' }}>{server.ipAddress}</p>
            </div>

            {/* Location Card */}
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(0, 234, 255, 0.3)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Location</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>{server.location}</p>
            </div>

            {/* HMI Version Card (if available) */}
            {server.hmiVersion && (
              <div style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(0, 234, 255, 0.3)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>HMI Version</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0, color: '#00eaff' }}>v{server.hmiVersion}</p>
              </div>
            )}

            {/* Hardware / System Info (CPU, RAM, Drives) */}
            {(server.cpu || server.memory || server.drives) && (
              <div style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(0, 234, 255, 0.18)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Hardware</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {server.cpu && <div style={{ minWidth: '140px' }}><p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.8rem' }}>CPU</p><p style={{ fontWeight: 'bold' }}>{server.cpu}</p></div>}
                  {server.memory && <div style={{ minWidth: '140px' }}><p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.8rem' }}>Memory</p><p style={{ fontWeight: 'bold' }}>{server.memory}</p></div>}
                  {server.drives && (
                    <div style={{ minWidth: '220px' }}>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.8rem' }}>Drives</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))', gap: '0.4rem', marginTop: '0.4rem' }}>
                        <div style={{ fontSize: '0.9rem' }}>C: <strong>{server.drives.C}</strong></div>
                        <div style={{ fontSize: '0.9rem' }}>D: <strong>{server.drives.D}</strong></div>
                        <div style={{ fontSize: '0.9rem' }}>E: <strong>{server.drives.E}</strong></div>
                        <div style={{ fontSize: '0.9rem' }}>F: <strong>{server.drives.F}</strong></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* HMI Configuration Status (only if HMI-related fields exist) */}
          {(server.alyacPatched !== undefined || server.hmiUpdated !== undefined || server.timesyncStatus !== undefined) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              maxWidth: '900px',
              width: '100%',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(0, 234, 255, 0.3)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              marginBottom: '2rem'
            }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#00eaff' }}>
              HMI Configuration Status
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Alyac Patched */}
              <div style={{
                padding: '1.2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: `2px solid ${getStatusBadgeColor(server.alyacPatched)}22`,
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.9rem' }}>Alyac Patched</p>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: getStatusBadgeColor(server.alyacPatched) + '22',
                    color: getStatusBadgeColor(server.alyacPatched),
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {server.alyacPatched ? '✓ PATCHED' : '✗ NOT PATCHED'}
                  </span>
                </div>
              </div>

              {/* HMI Updated */}
              <div style={{
                padding: '1.2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: `2px solid ${getStatusBadgeColor(server.hmiUpdated)}22`,
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.9rem' }}>HMI Updated</p>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: getStatusBadgeColor(server.hmiUpdated) + '22',
                    color: getStatusBadgeColor(server.hmiUpdated),
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {server.hmiUpdated ? '✓ UPDATED' : '✗ NOT UPDATED'}
                  </span>
                </div>
              </div>

              {/* Timesync Status */}
              <div style={{
                padding: '1.2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: `2px solid ${server.timesyncStatus === 'synced' ? '#00ff88' : '#ff4444'}22`,
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.9rem' }}>Timesync</p>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: (server.timesyncStatus === 'synced' ? '#00ff88' : '#ff4444') + '22',
                    color: server.timesyncStatus === 'synced' ? '#00ff88' : '#ff4444',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {server.timesyncStatus === 'synced' ? '🔄 SYNCED' : '⚠ NOT SYNCED'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          )}

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              maxWidth: '900px',
              width: '100%',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(0, 234, 255, 0.3)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#00eaff' }}>
              Summary
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              fontSize: '0.95rem'
            }}>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.85rem' }}>PC NAME</p>
                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '1rem' }}>{server.name}</p>
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.85rem' }}>IP ADDRESS</p>
                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '1rem', color: '#00eaff' }}>{server.ipAddress}</p>
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.85rem' }}>LOCATION</p>
                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '1rem' }}>{server.location}</p>
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.85rem' }}>STATUS</p>
                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '1rem', color: getStatusColor(server.status) }}>
                  {server.status === 'online' ? '🟢 ONLINE' : '🔴 OFFLINE'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="footer" style={{ marginTop: '3rem' }}>
              <p>&copy; 2026 Automation Servers - Shearing Line. All rights reserved. | Duta Alamin</p>
        </footer>
      </div>
    </>
  );
};

export default ServerDetail;
