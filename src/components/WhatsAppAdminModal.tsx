import React, { useState } from 'react';
import { Lock, KeyRound, Phone, CheckCircle2, AlertCircle, X, Shield, Eye, EyeOff } from 'lucide-react';

interface WhatsAppAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEnabled: boolean;
  currentNumber: string;
  onSaveConfig: (number: string, enabled: boolean) => void;
}

export const WhatsAppAdminModal: React.FC<WhatsAppAdminModalProps> = ({
  isOpen,
  onClose,
  isEnabled,
  currentNumber,
  onSaveConfig,
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authError, setAuthError] = useState('');
  const [phoneInput, setPhoneInput] = useState(currentNumber || '');
  const [enableSwitch, setEnableSwitch] = useState(isEnabled);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  if (!isOpen) return null;

  const handleVerifyPassword = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (password.trim() === '8787') {
      setIsUnlocked(true);
      setAuthError('');
      setPhoneInput(currentNumber);
      setEnableSwitch(isEnabled);
    } else {
      setAuthError('Senha incorreta. Tente novamente.');
    }
  };

  const handlePasswordChange = (val: string) => {
    setPassword(val);
    if (authError) setAuthError('');
    // Auto-unlock as soon as the user types 8787
    if (val.trim() === '8787') {
      setIsUnlocked(true);
      setAuthError('');
      setPhoneInput(currentNumber);
      setEnableSwitch(isEnabled);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = phoneInput.replace(/\D/g, '');

    if (enableSwitch && cleanDigits.length < 10) {
      setAuthError('Por favor, informe um número válido com DDD (mínimo de 10 dígitos).');
      return;
    }

    // If starts with DDD without country code (10 or 11 digits), prepend Brazil code 55
    let finalDigits = cleanDigits;
    if (finalDigits.length === 10 || finalDigits.length === 11) {
      finalDigits = '55' + finalDigits;
    }

    onSaveConfig(finalDigits, enableSwitch);
    setFeedbackSuccess(true);
    setTimeout(() => {
      setFeedbackSuccess(false);
      onClose();
    }, 1200);
  };

  const handleDisable = () => {
    onSaveConfig(phoneInput, false);
    setEnableSwitch(false);
    setFeedbackSuccess(true);
    setTimeout(() => {
      setFeedbackSuccess(false);
      onClose();
    }, 1200);
  };

  const handleClose = () => {
    setPassword('');
    setIsUnlocked(false);
    setAuthError('');
    onClose();
  };

  // Live preview formatting
  const previewDigits = phoneInput.replace(/\D/g, '');
  const previewUrl = previewDigits
    ? `https://wa.me/${previewDigits.length <= 11 ? '55' + previewDigits : previewDigits}`
    : '';

  return (
    <div
      id="whatsapp-admin-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        id="whatsapp-admin-modal-container"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                Painel do WhatsApp
              </h3>
              <p className="text-[11px] text-slate-400">
                Acesso administrativo seguro
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {feedbackSuccess ? (
            <div className="py-8 text-center animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h4 className="font-heading text-lg font-bold text-slate-900 mb-1">
                Configuração Atualizada com Sucesso!
              </h4>
              <p className="text-xs text-slate-600">
                {enableSwitch
                  ? 'O botão de WhatsApp está agora habilitado no site com o número cadastrado.'
                  : 'O botão de WhatsApp foi desabilitado no site.'}
              </p>
            </div>
          ) : !isUnlocked ? (
            /* Password Step */
            <form onSubmit={handleVerifyPassword} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>
                  O atendimento via WhatsApp está bloqueado. Digite a senha de liberação para cadastrar o número e ativar ou desativar o botão para os visitantes.
                </span>
              </div>

              <div>
                <label
                  htmlFor="admin-password-input"
                  className="block text-xs font-semibold text-slate-700 mb-1.5"
                >
                  Digite a Senha de Acesso:
                </label>
                <div className="relative">
                  <input
                    id="admin-password-input"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    placeholder="Digite a senha de liberação"
                    autoFocus
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label={showPassword ? 'Ocultar senha' : 'Ver senha'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {authError && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{authError}</span>
                  </p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  id="admin-submit-password-btn"
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Liberar Configuração</span>
                </button>
              </div>
            </form>
          ) : (
            /* Unlocked Configuration Step */
            <form onSubmit={handleSave} className="space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Acesso Liberado</span>
                </div>
                <span
                  className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-bold ${
                    isEnabled
                      ? 'bg-emerald-200 text-emerald-900'
                      : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  {isEnabled ? 'Ativo no site' : 'Desativado'}
                </span>
              </div>

              <div>
                <label
                  htmlFor="admin-whatsapp-number-input"
                  className="block text-xs font-semibold text-slate-800 mb-1"
                >
                  Número do WhatsApp com DDD:
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="admin-whatsapp-number-input"
                    type="text"
                    value={phoneInput}
                    onChange={(e) => {
                      setPhoneInput(e.target.value);
                      if (authError) setAuthError('');
                    }}
                    placeholder="Ex: 31999999999 ou 5531999999999"
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm font-mono rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    autoFocus
                  />
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  Informe apenas números com DDD. O código do Brasil (55) será adicionado automaticamente caso omitido.
                </p>
                {authError && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{authError}</span>
                  </p>
                )}
              </div>

              {/* Status Selection: Ativar ou Desativar */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-2">
                  Status do Botão no Site:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setEnableSwitch(true)}
                    className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                      enableSwitch
                        ? 'border-emerald-500 bg-emerald-50/70 text-emerald-900 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${enableSwitch ? 'bg-emerald-600' : 'bg-slate-400'}`}></span>
                        Ativar Botão
                      </span>
                      {enableSwitch && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      Disponível para todos os visitantes do site.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEnableSwitch(false)}
                    className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                      !enableSwitch
                        ? 'border-slate-500 bg-slate-100 text-slate-900 ring-2 ring-slate-400/20'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-slate-600" />
                        Desativar Botão
                      </span>
                      {!enableSwitch && <CheckCircle2 className="w-4 h-4 text-slate-700" />}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      Permanece bloqueado com o cadeado.
                    </span>
                  </button>
                </div>
              </div>

              {/* Link Preview when enabled */}
              {enableSwitch && previewUrl && (
                <div className="p-3 rounded-lg bg-slate-100 text-[11px] font-mono text-slate-600 break-all">
                  <span className="text-slate-400 block font-sans text-[10px] uppercase font-bold mb-0.5">
                    Link gerado para os visitantes:
                  </span>
                  {previewUrl}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  id="save-whatsapp-config-btn"
                  type="submit"
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-xs font-bold transition-all shadow-sm ${
                    enableSwitch
                      ? 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700'
                      : 'bg-slate-800 hover:bg-slate-700 active:bg-slate-900'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{enableSwitch ? 'Salvar e Ativar Botão' : 'Salvar e Desativar Botão'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
