import {
  Zap,
  Clock,
  TrendingUp,
  DollarSign,
  Code,
  Palette,
  ShoppingCart,
  Search,
  Smartphone,
  Settings,
  Star,
  Crown,
  Lock,
  Shield,
  Server,
  CheckCircle,
  Bot,
  MessageSquare,
} from 'lucide-react';

/**
 * Mapeo de nombres de iconos a componentes
 */
const iconMap = {
  Zap,
  Clock,
  TrendingUp,
  DollarSign,
  Code,
  Palette,
  ShoppingCart,
  Search,
  Smartphone,
  Settings,
  Star,
  Crown,
  Lock,
  Shield,
  Server,
  CheckCircle,
  Bot,
  MessageSquare,
};

/**
 * Resuelve un nombre de icono a su componente
 * @param {string} iconName - Nombre del icono
 * @param {number} size - Tamaño del icono
 * @returns {JSX.Element|null}
 */
export function getIcon(iconName, size = 28) {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  return <IconComponent size={size} />;
}

export default iconMap;
