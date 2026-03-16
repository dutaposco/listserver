import React, { useState } from 'react';

const servers = [
  // Computer Room
  { id: 1, name: "HMI01", ipAddress: "172.21.86.131", location: "Computer Room", status: "online", category: "COMPUTER ROOM" },
  { id: 2, name: "HMI02", ipAddress: "172.21.86.165", location: "Computer Room", status: "online", category: "COMPUTER ROOM" },
  { id: 3, name: "HMI19", ipAddress: "172.21.86.39", location: "Computer Room", status: "online", category: "COMPUTER ROOM" },
  { id: 4, name: "HMI97", ipAddress: "172.21.86.140", location: "Computer Room", status: "online", category: "COMPUTER ROOM" },
  { id: 5, name: "HMI98", ipAddress: "172.21.86.132", location: "Computer Room", status: "online", category: "COMPUTER ROOM" },
  { id: 6, name: "HMI99", ipAddress: "172.21.86.59", location: "Computer Room", status: "online", category: "COMPUTER ROOM" },

  // Furnace
  { id: 30, name: "HMI03", ipAddress: "172.21.86.31", location: "Furnace", status: "online", category: "FURNACE" },
  { id: 31, name: "HMI04", ipAddress: "172.21.86.35", location: "Furnace", status: "online", category: "FURNACE" },
  { id: 32, name: "HMI05", ipAddress: "172.21.86.37", location: "Furnace", status: "online", category: "FURNACE" },
  { id: 33, name: "HMI06", ipAddress: "172.21.86.38", location: "Furnace", status: "online", category: "FURNACE" },
  { id: 34, name: "HMI07", ipAddress: "172.21.86.41", location: "Furnace", status: "online", category: "FURNACE" },

  // FM
  { id: 40, name: "HMI13", ipAddress: "172.21.86.32", location: "FM", status: "online", category: "FM" },
  { id: 41, name: "HMI14", ipAddress: "172.21.86.33", location: "FM", status: "online", category: "FM" },
  { id: 42, name: "HMI15", ipAddress: "172.21.86.34", location: "FM", status: "online", category: "FM" },
  { id: 43, name: "HMI17", ipAddress: "172.21.86.42", location: "FM", status: "online", category: "FM" },
  { id: 44, name: "HMI20", ipAddress: "172.21.86.40", location: "FM", status: "online", category: "FM" },
  { id: 45, name: "HMI27", ipAddress: "172.21.86.63", location: "FM", status: "online", category: "FM" },
  { id: 46, name: "HMI28", ipAddress: "172.21.86.143", location: "FM", status: "online", category: "FM" },
  { id: 47, name: "HMI29", ipAddress: "172.21.86.145", location: "FM", status: "online", category: "FM" },

  // Shearing
  { id: 10, name: "HMI52", ipAddress: "172.21.86.45", location: "CB EER", status: "online", category: "SHEARING" },
  { id: 11, name: "HMI53", ipAddress: "172.21.86.150", location: "CB P/P", status: "online", category: "SHEARING" },
  { id: 12, name: "HMI54", ipAddress: "172.21.86.47", location: "CS P/P", status: "online", category: "SHEARING" },
  { id: 13, name: "HMI55", ipAddress: "172.21.86.48", location: "CS P/P", status: "online", category: "SHEARING" },
  { id: 14, name: "HMI57", ipAddress: "172.21.86.50", location: "DSS P/P", status: "online", category: "SHEARING" },
  { id: 15, name: "HMI51", ipAddress: "172.21.86.65", location: "DSS P/P", status: "online", category: "SHEARING" },
  { id: 16, name: "HMI95", ipAddress: "172.21.86.71", location: "DSS P/P", status: "online", category: "SHEARING" },
  { id: 17, name: "HMI58", ipAddress: "172.21.86.44", location: "DS P/P", status: "online", category: "SHEARING" },
  { id: 18, name: "HMI66", ipAddress: "172.21.86.51", location: "SHEARING EER", status: "online", category: "SHEARING" },
  { id: 19, name: "HMI59", ipAddress: "172.21.86.56", location: "MARKING P/P", status: "online", category: "SHEARING" },
  { id: 20, name: "HMI60", ipAddress: "172.21.86.52", location: "TOP INS P/P", status: "online", category: "SHEARING" },
  { id: 21, name: "HMI61", ipAddress: "172.21.86.53", location: "OUT INS P/P", status: "online", category: "SHEARING" },
  { id: 22, name: "HMI62", ipAddress: "172.21.86.54", location: "BOT INS P/P", status: "online", category: "SHEARING" },
  { id: 23, name: "HMI64", ipAddress: "172.21.86.57", location: "Tl P/P", status: "online", category: "SHEARING" },
  { id: 24, name: "HMI65", ipAddress: "172.21.86.58", location: "CL P/P", status: "online", category: "SHEARING" },
  { id: 25, name: "HMI67", ipAddress: "172.21.86.144", location: "SHEARING OFFICE", status: "online", category: "SHEARING" },

  // ACC
  { id: 50, name: "HMI21", ipAddress: "172.21.86.133", location: "ACC", status: "online", category: "ACC" },
  { id: 51, name: "HMI22", ipAddress: "172.21.86.134", location: "ACC", status: "online", category: "ACC" },
  { id: 52, name: "HMI23", ipAddress: "172.21.86.135", location: "ACC", status: "online", category: "ACC" },
  { id: 53, name: "HMI24", ipAddress: "172.21.86.141", location: "ACC", status: "online", category: "ACC" },
  { id: 54, name: "HMI25", ipAddress: "172.21.86.138", location: "ACC", status: "online", category: "ACC" },

  // Tech & Plant
  { id: 60, name: "HMI78", ipAddress: "172.21.86.166", location: "Tech & Plant", status: "online", category: "TECH AND PLANT" },
  { id: 61, name: "HMI79", ipAddress: "172.21.86.167", location: "Tech & Plant", status: "online", category: "TECH AND PLANT" },
  { id: 62, name: "HMI82", ipAddress: "172.21.86.170", location: "Tech & Plant", status: "online", category: "TECH AND PLANT" },
  { id: 63, name: "TECH", ipAddress: "172.21.86.168", location: "Tech & Plant", status: "online", category: "TECH AND PLANT" },

  // Data Center / PL1
  { id: 101, name: "PL1HSVR1", ipAddress: "172.21.80.201", location: "Data Center", status: "online", category: "DATA CENTER (PL1)" },
  { id: 102, name: "PL1HSVR2", ipAddress: "172.21.80.202", location: "Data Center", status: "backup", category: "DATA CENTER (PL1)" },
  { id: 103, name: "PL1HSVR3", ipAddress: "172.21.80.203", location: "Data Center", status: "online", category: "DATA CENTER (PL1)" },
  { id: 104, name: "PL1HSVR4", ipAddress: "172.21.80.204", location: "Data Center", status: "backup", category: "DATA CENTER (PL1)" },
  { id: 111, name: "PL1PSVR1", ipAddress: "172.21.80.81", location: "Data Center", status: "online", category: "DATA CENTER (PL1)" },
  { id: 112, name: "PL1PSVR2", ipAddress: "172.21.80.82", location: "Data Center", status: "backup", category: "DATA CENTER (PL1)" },
  { id: 113, name: "PL1PSVR3", ipAddress: "172.21.80.84", location: "Data Center", status: "online", category: "DATA CENTER (PL1)" },
  { id: 114, name: "PL1PSVR4", ipAddress: "172.21.80.85", location: "Data Center", status: "backup", category: "DATA CENTER (PL1)" },
  { id: 121, name: "WIN-LC7PL3SG9VN", ipAddress: "172.21.80.87", location: "Data Center", status: "online", category: "DATA CENTER (PL1)" },
  { id: 122, name: "PM-MACC-MCMI", ipAddress: "172.21.80.88", location: "Data Center", status: "online", category: "DATA CENTER (PL1)" },
  { id: 123, name: "pmpcteam", ipAddress: "172.21.73.118:10022", location: "FTP", status: "online", category: "OTHER" }
];

function App() {
  const [search, setSearch] = useState('');

  const filteredServers = servers.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.ipAddress.includes(search)
  );

  const categories = [...new Set(filteredServers.map(s => s.category))];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - More Compact */}
        <header className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/20">H</div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">HMI SERVER MONITORING</h1>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search Client or IP..."
              className="bg-white border border-slate-300 rounded-md px-3 py-1.5 w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm outline-none shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        {/* Categories Masonry Column Layout to remove vertical gaps */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {categories.map((cat) => (
            <div key={cat} className="break-inside-avoid mb-6">
              <h2 className="text-[10px] font-black tracking-[0.1em] text-blue-700 mb-2 uppercase flex items-center gap-2">
                <span className="w-1 h-3 bg-blue-600 rounded-full"></span>
                {cat}
              </h2>

              <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-200">
                      <th className="px-3 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Client</th>
                      <th className="px-3 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">IP Address</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredServers.filter(s => s.category === cat).map((server) => (
                      <tr key={server.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-3 py-2.5 text-xs font-bold text-slate-700">{server.name}</td>
                        <td className="px-3 py-2.5 font-mono text-[11px] text-slate-400">{server.ipAddress}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {filteredServers.length === 0 && (
          <div className="py-20 text-center text-slate-400 text-sm font-medium italic">
            Search result is empty.
          </div>
        )}

        <footer className="mt-12 pt-4 border-t border-slate-200 flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em]">
          <p>© 2026 POSCO DX INFRA</p>
          <div className="flex gap-4">
            <span className="text-blue-500/50 italic">Internal network only</span>
            <span>By Duta Alamin</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
