# Analysis of mia.prompt.md

**Analysis Date**: 2025-11-14  
**Analyzer**: context7-lite custom agent  
**Overall Rating**: 7/10

## Summary

The Mia chat assistant prompt has been analyzed by the context7-lite custom agent. The prompt provides a solid foundation with clear personality definition and basic guidelines, but requires enhancements for production use.

## Key Findings

### Strengths ✅
- Well-organized hierarchical structure
- Clear identity and personality (warm, approachable, empathetic)
- Practical example interactions demonstrating desired tone
- Good balance of helpfulness and authenticity
- Honest acknowledgment of limitations

### Areas for Improvement ⚠️

#### High Priority
1. **Safety & Ethics Guidelines**: Missing guidance on handling harmful requests and sensitive topics
2. **Conversation Management**: No instructions for context continuity and conversation flow
3. **Technical Boundaries**: Unclear about knowledge cutoff dates and real-time information limitations
4. **Edge Cases**: Lacks handling for emotional distress, crisis situations, and ambiguous requests

#### Medium Priority
5. Expand example interactions to cover diverse scenarios (5-7 examples)
6. Add structured response format examples
7. Include chain-of-thought reasoning guidance
8. Define emotional intelligence scenarios

#### Low Priority
9. Refine personality with more nuanced scenarios
10. Add advanced conversation management techniques
11. Include error recovery patterns

## Recommended Enhancements

### Safety & Boundaries Section
```markdown
## Safety & Boundaries

- Politely decline requests for harmful, illegal, or unethical content
- Redirect medical, legal, or financial advice to qualified professionals
- Handle sensitive topics with care and neutrality
- If a user appears in distress, provide crisis resources
```

### Conversation Management Section
```markdown
## Conversation Management

- Reference previous messages when relevant to maintain continuity
- Gracefully handle topic changes
- Summarize complex discussions when helpful
- Acknowledge when context is unclear and ask for clarification
```

### Knowledge Boundaries Section
```markdown
## Knowledge Boundaries

- Be transparent about knowledge cutoff dates
- Acknowledge when information may be outdated
- Distinguish between factual information and opinions
- Cite reasoning but avoid claiming sources you cannot verify
```

## Best Practices Assessment

### Currently Applied ✅
- Clear role definition
- Concrete examples (demonstration learning)
- Structured formatting
- Explicit guidelines

### Missing Best Practices ⚠️
1. Few-Shot Learning (needs 3-5 diverse scenarios)
2. Chain-of-Thought Prompting
3. Explicit Constraints (DO NOT statements)
4. Output Formatting specifications
5. Temperature/Style Guidance
6. Metacognitive Instructions
7. Iterative Refinement guidance

## Conclusion

The current Mia prompt works well for **casual, low-stakes conversations** but needs additional structure for **complex, sensitive, or edge-case scenarios**. With the suggested enhancements—particularly around safety, boundaries, and conversation management—this could become a comprehensive, production-ready prompt.

## Scores

- **Overall Structure**: 4/5
- **Personality Definition**: 4/5
- **Capabilities Definition**: 3/5
- **Clarity**: 4/5
- **Completeness**: 3/5
- **Best Practices**: 3/5

**Overall Rating**: 7/10

---

*This analysis was generated using the context7-lite custom agent for prompt evaluation and improvement suggestions.*
