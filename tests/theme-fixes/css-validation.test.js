/**
 * Property-Based Tests for CSS Validation and Optimization
 * Feature: theme-fixes
 */

const fc = require('fast-check')
const fs = require('fs')
const path = require('path')

describe('CSS Validation Properties', () => {
  let cssContent

  beforeAll(() => {
    // Read the clean-theme.css file
    const cssPath = path.join(__dirname, '../../docs/.vitepress/theme/clean-theme.css')
    cssContent = fs.readFileSync(cssPath, 'utf8')
  })

  /**
   * Feature: theme-fixes, Property 6: CSS Validation and Optimization
   * Validates: Requirements 4.1, 4.2, 4.5, 6.1, 6.2, 6.3, 6.4
   */
  test('Property 6: CSS Validation - CSS should be valid and conflict-free', () => {
    fc.assert(fc.property(
      fc.constantFrom('light', 'dark'),
      (themeType) => {
        // Check for basic CSS syntax validity
        const hasValidBraces = (cssContent.match(/{/g) || []).length === (cssContent.match(/}/g) || []).length
        
        // Check for theme-specific variables
        const hasThemeVariables = themeType === 'dark' 
          ? cssContent.includes('.dark {') && cssContent.includes('--vp-c-brand-1: #ffffff')
          : cssContent.includes('html:not(.dark)') && cssContent.includes('--vp-c-brand-1: #3b82f6')

        // Check for no conflicting imports (allow font imports)
        const importMatches = cssContent.match(/@import/g) || []
        const hasNoConflictingImports = importMatches.length <= 1 // Only font import allowed

        // Check for proper CSS variable definitions
        const hasProperVariables = cssContent.includes('--vp-c-')



        // Property: CSS should be valid, have proper theme variables, and no conflicts
        return hasValidBraces && hasThemeVariables && hasNoConflictingImports && hasProperVariables
      }
    ), { numRuns: 100 })
  })

  test('CSS structure validation - should have required theme sections', () => {
    // Check for required sections
    const hasLightTheme = cssContent.includes('html:not(.dark)')
    const hasDarkTheme = cssContent.includes('.dark {')
    const hasMobileSection = cssContent.includes('@media (max-width: 768px)')
    const hasScrollbarHiding = cssContent.includes('::-webkit-scrollbar')

    expect(hasLightTheme).toBe(true)
    expect(hasDarkTheme).toBe(true)
    expect(hasMobileSection).toBe(true)
    expect(hasScrollbarHiding).toBe(true)
  })

  test('CSS variable consistency - should have matching variables for both themes', () => {
    const lightThemeVars = cssContent.match(/html:not\(\.dark\)[^}]*{([^}]*)}/s)?.[1] || ''
    const darkThemeVars = cssContent.match(/\.dark\s*{([^}]*)}/s)?.[1] || ''

    // Check for essential variables in both themes
    const essentialVars = [
      '--vp-c-bg',
      '--vp-c-text-1',
      '--vp-c-brand-1',
      '--vp-button-brand-bg'
    ]

    const lightHasEssential = essentialVars.every(varName => lightThemeVars.includes(varName))
    const darkHasEssential = essentialVars.every(varName => darkThemeVars.includes(varName))

    expect(lightHasEssential).toBe(true)
    expect(darkHasEssential).toBe(true)
  })
})