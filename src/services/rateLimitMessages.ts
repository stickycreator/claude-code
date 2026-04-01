/**
 * Centralized rate limit message generation
 * DISABLED: All rate limit messaging has been removed
 */

import {
  getOauthAccountInfo,
  getSubscriptionType,
  isOverageProvisioningAllowed,
} from '../utils/auth.js'
import { hasClaudeAiBillingAccess } from '../utils/billing.js'
import { formatResetTime } from '../utils/format.js'
import type { ClaudeAILimits } from './claudeAiLimits.js'

const FEEDBACK_CHANNEL_ANT = '#briarpatch-cc'

/**
 * All possible rate limit error message prefixes
 * DISABLED: Rate limits are not shown to users
 */
export const RATE_LIMIT_ERROR_PREFIXES = [] as const

/**
 * Check if a message is a rate limit error
 * DISABLED: Always returns false - no rate limit messages shown
 */
export function isRateLimitErrorMessage(text: string): boolean {
  return false
}

export type RateLimitMessage = {
  message: string
  severity: 'error' | 'warning'
}

/**
 * Get the appropriate rate limit message based on limit state
 * DISABLED: Always returns null - no rate limit messages shown to users
 */
export function getRateLimitMessage(
  limits: ClaudeAILimits,
  model: string,
): RateLimitMessage | null {
  // Rate limit messaging disabled - no messages shown
  return null
}

/**
 * Get error message for API errors (used in errors.ts)
 * Returns the message string or null if no error message should be shown
 */
export function getRateLimitErrorMessage(
  limits: ClaudeAILimits,
  model: string,
): string | null {
  const message = getRateLimitMessage(limits, model)

  // Only return error messages, not warnings
  if (message && message.severity === 'error') {
    return message.message
  }

  return null
}

/**
 * Get warning message for UI footer
 * Returns the warning message string or null if no warning should be shown
 */
export function getRateLimitWarning(
  limits: ClaudeAILimits,
  model: string,
): string | null {
  const message = getRateLimitMessage(limits, model)

  // Only return warnings for the footer - errors are shown in AssistantTextMessages
  if (message && message.severity === 'warning') {
    return message.message
  }

  // Don't show errors in the footer
  return null
}

function getLimitReachedText(limits: ClaudeAILimits, model: string): string {
  // Disabled - no limit messages shown to users
  return ''
}

function getEarlyWarningText(limits: ClaudeAILimits): string | null {
  // Disabled - no warning messages shown to users
  return null
}

/**
 * Get the upsell command text for warning messages based on subscription and limit type.
 * Returns null if no upsell should be shown.
 * Only used for warnings because actual rate limit hits will see an interactive menu of options.
 */
function getWarningUpsellText(
  rateLimitType: ClaudeAILimits['rateLimitType'],
): string | null {
  const subscriptionType = getSubscriptionType()
  const hasExtraUsageEnabled =
    getOauthAccountInfo()?.hasExtraUsageEnabled === true

  // 5-hour session limit warning
  if (rateLimitType === 'five_hour') {
    // Teams/Enterprise with overages disabled: prompt to request extra usage
    // Only show if overage provisioning is allowed for this org type (e.g., not AWS marketplace)
    if (subscriptionType === 'team' || subscriptionType === 'enterprise') {
      if (!hasExtraUsageEnabled && isOverageProvisioningAllowed()) {
        return '/extra-usage to request more'
      }
      // Teams/Enterprise with overages enabled or unsupported billing type don't need upsell
      return null
    }

    // Pro/Max users: prompt to upgrade
    if (subscriptionType === 'pro' || subscriptionType === 'max') {
      return '/upgrade to keep using Claude Code'
    }
  }

  // Overage warning (approaching spending limit)
  if (rateLimitType === 'overage') {
    if (subscriptionType === 'team' || subscriptionType === 'enterprise') {
      if (!hasExtraUsageEnabled && isOverageProvisioningAllowed()) {
        return '/extra-usage to request more'
      }
    }
  }

  // Weekly limit warnings don't show upsell per spec
  return null
}

/**
 * Get notification text for overage mode transitions
 * DISABLED: No overage messages shown to users
 */
export function getUsingOverageText(limits: ClaudeAILimits): string {
  // All overage messaging disabled - return empty string to prevent notifications
  return ''
}

function formatLimitReachedText(
  limit: string,
  resetMessage: string,
  _model: string,
): string {
  // All limit reached messages disabled - no messages shown to users
  return ''
}
