<template>
  <fragment>
    <n-link to="/step-0" class="[ primary-cta ] [ text-4xl bg-light p-4 ]">
      <div class="primary-cta-content">
        <span class="text-7xl text-primary">0.</span>
        <span>Find You Mission</span>
      </div>
    </n-link>
  </fragment>
</template>

<style lang="scss" scoped>
.primary-cta {
  clip-path: url('#paper-shape');
  display: inline-block;
  font-style: italic;
  position: relative;
  transform: rotate(-5deg);

  &::before {
    background-image: linear-gradient(#99d9f1, 1px, transparent 1px);
    background-position: center;
    background-size: 100% 0.7em;
    bottom: 1rem;
    content: '';
    left: 1rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transform: rotate(5deg);
  }
}

.primary-cta-content {
  transform: rotate(5deg);
}
</style>
