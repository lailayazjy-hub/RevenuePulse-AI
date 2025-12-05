
import React from 'react';
import { X, Check } from 'lucide-react';
import { APP_THEMES } from '../utils/themes';
import { AppTheme } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
  setAppName: (name: string) => void;
  currentThemeId: string;
  setThemeId: (id: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen, onClose, appName, setAppName, currentThemeId, setThemeId
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-fadeIn">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-800">Instellingen</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* App Name Section */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Applicatie Naam</label>
            <input 
              type="text" 
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Bijv. RevenuePulse AI"
            />
            <p className="text-xs text-slate-400 mt-1">Deze naam is zichtbaar in de header en tabblad.</p>
          </div>

          {/* Theme Section */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Kleur Thema</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
              {APP_THEMES.map((theme: AppTheme) => (
                <button
                  key={theme.id}
                  onClick={() => setThemeId(theme.id)}
                  className={`relative flex items-center p-3 rounded-xl border-2 transition-all text-left ${
                    currentThemeId === theme.id 
                      ? 'border-indigo-600 bg-indigo-50/50' 
                      : 'border-slate-100 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex-1">
                    <span className={`block text-sm font-medium ${currentThemeId === theme.id ? 'text-indigo-900' : 'text-slate-700'}`}>
                      {theme.name}
                    </span>
                    <div className="flex gap-1 mt-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.highRisk }}></div>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.mediumRisk }}></div>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.lowRisk }}></div>
                    </div>
                  </div>
                  {currentThemeId === theme.id && (
                    <div className="absolute top-3 right-3 text-indigo-600">
                      <Check size={16} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors"
            style={{ backgroundColor: 'var(--theme-primary)' }}
          >
            Gereed
          </button>
        </div>
      </div>
    </div>
  );
};
