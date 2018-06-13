<div class="featured_container featured_scheme_<?= $colour_scheme ?> featured_margins_<?= $margins ?>">
	<div class="featured_content">
	
		<div class="featured_heading"><?= $heading ?></div>
		<div class="featured_subheading" <?php _ib($icon, 40) ?>><?= $subheading ?></div>
		
		<div class="featured_items">
			<?php if(!empty($items)): ?>

				<?php foreach($items as $item): ?>
					<div class="featured_item featured_item_<?= $item['highlighted'] ?>">
						<div class="featured_item_inner">
							<?php _panel('eg/article_thumb', ['article_id' => $item['article_id'], ]) ?>
						</div>
					</div>
				<?php endforeach ?>
			
			<?php else: ?>
		
				<div class="eg_error">[No features to show!]</div>
		
			<?php endif ?>
		</div>

	</div>
</div>