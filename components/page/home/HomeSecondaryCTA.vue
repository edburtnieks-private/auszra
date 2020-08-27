<template>
  <div>
    <n-link to="/dashboard" class="[ secondary-cta ] [ bg-light p-4 ]">
      <div class="secondary-cta-content">
        or continue learning
      </div>
    </n-link>
  </div>
</template>

<style lang="scss" scoped>
svg {
  position: absolute;
  width: 0;
  height: 0;
}

.secondary-cta {
  clip-path: url('#paper-shape');
  display: inline-block;
  font-style: italic;
  position: relative;
  transform: rotate(3deg);

  &::before {
    background-image: linear-gradient(#99d9f1, 1px, transparent 1px);
    background-position: center;
    background-size: 100% 0.8em;
    bottom: 1rem;
    content: '';
    left: 1rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transform: rotate(-3deg);
  }
}

.secondary-cta-content {
  transform: rotate(-3deg);
}
</style>
