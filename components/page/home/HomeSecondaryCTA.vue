<template>
  <div>
    <n-link to="/dashboard" class="[ secondary-cta ] [ bg-light p-4 ]">
      <div class="secondary-cta-content">
        continue learning
      </div>
    </n-link>
  </div>
</template>

<style lang="scss" scoped>
.secondary-cta {
  box-shadow: inset 0 0 10px -5px #2d3748;
  clip-path: url('#paper-shape');
  display: inline-block;
  font-style: italic;
  transform: rotate(3deg);
}

.secondary-cta-content {
  transform: rotate(-3deg);
}
</style>
