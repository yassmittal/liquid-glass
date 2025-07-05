'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  LineChart,
  Menu,
  Plus,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      />

      <div className="fixed inset-0 bg-black/10" />

      <div className="relative z-10 min-h-screen flex">
        <div
          className={cn(
            'fixed inset-y-0 z-20 transition-all duration-500 ease-out',
            sidebarOpen ? 'left-0' : '-left-64'
          )}
        >
          <div className="h-full w-64 glass-panel glass-sidebar flex flex-col">
            <div className="p-4 flex items-center gap-3 border-b border-white/30">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center glass-button shadow-xl">
                <CircleUser className="h-5 w-5 text-white drop-shadow-sm" />
              </div>
              <div>
                <h1 className="font-medium text-white drop-shadow-sm">Acme Inc.</h1>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              <SidebarItem
                icon={<LineChart className="h-4 w-4" />}
                label="Dashboard"
                active
              />
              <SidebarItem
                icon={<Users className="h-4 w-4" />}
                label="Lifecycle"
              />
              <SidebarItem
                icon={<LineChart className="h-4 w-4" />}
                label="Analytics"
              />
              <SidebarItem
                icon={<Menu className="h-4 w-4" />}
                label="Projects"
              />
              <SidebarItem
                icon={<Users className="h-4 w-4" />}
                label="Team"
              />

              <div className="pt-4 pb-2">
                <div className="px-3 text-xs font-medium text-white/70 drop-shadow-sm">
                  Documents
                </div>
              </div>

              <SidebarItem
                icon={<Menu className="h-4 w-4" />}
                label="Data Library"
              />
              <SidebarItem
                icon={<LineChart className="h-4 w-4" />}
                label="Reports"
              />
              <SidebarItem
                icon={<Menu className="h-4 w-4" />}
                label="Word Assistant"
              />
            </nav>

            <div className="p-4 border-t border-white/30">
              <SidebarItem
                icon={<Settings className="h-4 w-4" />}
                label="Settings"
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            'flex-1 transition-all duration-500 ease-out',
            sidebarOpen ? 'ml-64' : 'ml-0'
          )}
        >
          <header className="sticky top-0 z-10 glass-panel glass-header">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="glass-button glass-interactive"
                >
                  <Menu className="h-4 w-4 text-white drop-shadow-sm" />
                </button>
                <h2 className="text-lg font-medium text-white drop-shadow-sm">Documents</h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <button className="glass-button-secondary glass-interactive">
                    <Search className="h-4 w-4" />
                    <span>Quick Search</span>
                  </button>
                </div>

                <button className="glass-button-primary glass-interactive">
                  <Plus className="h-4 w-4" />
                  <span>Quick Create</span>
                </button>
              </div>
            </div>
          </header>

          <main className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Revenue"
                value="$1,250.00"
                change="+12.5%"
                trend="up"
                description="Trending up this month"
                subdescription="Visitors for the last 6 months"
              />

              <StatCard
                title="New Customers"
                value="1,234"
                change="-20%"
                trend="down"
                description="Down 20% this period"
                subdescription="Acquisition needs attention"
              />

              <StatCard
                title="Active Accounts"
                value="45,678"
                change="+12.5%"
                trend="up"
                description="Strong user retention"
                subdescription="Engagement exceed targets"
              />

              <StatCard
                title="Growth Rate"
                value="4.5%"
                change="+4.5%"
                trend="up"
                description="Steady performance increase"
                subdescription="Meets growth projections"
              />
            </div>

            <div className="glass-panel glass-content">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-white drop-shadow-sm">
                      Total Visitors
                    </h3>
                    <p className="text-sm text-white/70 drop-shadow-sm">
                      Total for the last 3 months
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <TabButton active>Last 3 months</TabButton>
                    <TabButton>Last 30 days</TabButton>
                    <TabButton>Last 7 days</TabButton>
                  </div>
                </div>

                <div className="h-64 w-full glass-inner rounded-xl flex items-center justify-center">
                  <div className="text-white/60 text-sm drop-shadow-sm">
                    Chart visualization would appear here
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel glass-content">
              <div className="p-6 border-b border-white/20">
                <div className="flex items-center gap-4 flex-wrap">
                  <TabButton active>Outline</TabButton>
                  <TabButton badge="3">Past Performance</TabButton>
                  <TabButton badge="2">Key Personnel</TabButton>
                  <TabButton>Focus Documents</TabButton>

                  <div className="ml-auto flex items-center gap-2">
                    <button className="glass-button-secondary glass-interactive">
                      <Menu className="h-4 w-4" />
                      <span>Customize Columns</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    <button className="glass-button-secondary glass-interactive">
                      <Plus className="h-4 w-4" />
                      <span>Add Section</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/5">
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider w-8">
                        <input
                          type="checkbox"
                          className="glass-checkbox"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Header
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Section Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Target
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Limit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Reviewer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow
                      title="Cover page"
                      type="Cover page"
                      status="In Progress"
                      target="18"
                      limit="5"
                      reviewer="Eddie Lake"
                    />
                    <TableRow
                      title="Table of contents"
                      type="Table of contents"
                      status="Done"
                      target="29"
                      limit="24"
                      reviewer="Eddie Lake"
                    />
                    <TableRow
                      title="Executive summary"
                      type="Narrative"
                      status="Done"
                      target="10"
                      limit="13"
                      reviewer="Eddie Lake"
                    />
                    <TableRow
                      title="Technical approach"
                      type="Narrative"
                      status="Done"
                      target="27"
                      limit="23"
                      reviewer="Jamik Tashpulatov"
                    />
                    <TableRow
                      title="Design"
                      type="Narrative"
                      status="In Progress"
                      target="2"
                      limit="16"
                      reviewer="Jamik Tashpulatov"
                    />
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-white/20 flex items-center justify-between">
                <div className="text-sm text-white/70 drop-shadow-sm">0 of 68 row(s) selected.</div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/70 drop-shadow-sm">Rows per page:</span>
                    <select className="glass-select">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                  </div>

                  <div className="text-sm text-white drop-shadow-sm">Page 1 of 7</div>

                  <div className="flex items-center gap-1">
                    <button className="glass-button glass-interactive">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="glass-button glass-interactive">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <button
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300 group',
        active
          ? 'glass-button-active text-white shadow-lg'
          : 'text-white/80 hover:glass-button-hover hover:text-white'
      )}
    >
      <span className="drop-shadow-sm">{icon}</span>
      <span className="drop-shadow-sm">{label}</span>
    </button>
  )
}

function StatCard({ title, value, change, trend, description, subdescription }) {
  return (
    <div className="glass-panel glass-card group hover:glass-card-hover transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-white/70 drop-shadow-sm">{title}</div>
          <div
            className={cn(
              'text-xs font-medium px-2 py-0.5 rounded-full glass-badge flex items-center gap-1 drop-shadow-sm',
              trend === 'up' ? 'glass-badge-success' : 'glass-badge-danger'
            )}
          >
            {change}
            {trend === 'up' ? '↑' : '↓'}
          </div>
        </div>

        <div className="text-2xl font-semibold text-white mb-4 drop-shadow-sm">{value}</div>

        <div className="flex items-center gap-1 text-sm text-white/90 drop-shadow-sm">
          {description}
          <ArrowUpRight className="h-3 w-3" />
        </div>

        <div className="text-xs text-white/60 mt-1 drop-shadow-sm">{subdescription}</div>
      </div>
    </div>
  )
}

function TabButton({ children, active = false, badge = null }) {
  return (
    <button
      className={cn(
        'h-9 px-4 rounded-full text-sm transition-all duration-300 flex items-center gap-2',
        active
          ? 'glass-button-active text-white shadow-lg'
          : 'glass-button-secondary text-white/80 hover:text-white hover:glass-button-hover'
      )}
    >
      <span className="drop-shadow-sm">{children}</span>
      {badge && (
        <span className="h-5 min-w-5 rounded-full glass-badge text-white/80 text-xs flex items-center justify-center px-1 drop-shadow-sm">
          {badge}
        </span>
      )}
    </button>
  )
}

function TableRow({ title, type, status, target, limit, reviewer }) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="checkbox"
          className="glass-checkbox"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{title}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80 drop-shadow-sm">{type}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={cn(
            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium glass-badge drop-shadow-sm',
            status === 'Done' ? 'glass-badge-success' : 'glass-badge-info'
          )}
        >
          {status === 'Done' ? '●' : '○'} {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{target}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{limit}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{reviewer}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="glass-button glass-interactive">
          <Menu className="h-4 w-4" />
        </button>
      </td>
    </tr>
  )
}
