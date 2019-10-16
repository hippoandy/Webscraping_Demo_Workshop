$( document ).ready(function()
{
    $.ajax({
        type: 'get',
        url: 'https://hipposerver.ddns.net/webscraping/assets/json/product_list.json',
        dataType: 'JSON',
        success: function( data )
        {
            var container = document.getElementById( 'product-list' );
            var parent = null;
            for( var i = 0; i < data.num_of_items; i++ )
            {
                var cur = data.results[ i ];

                var idx = i % 4;
                if( idx == 0 )
                {
                    // append the previous parent to doc (if any)
                    if( parent != null ) container.appendChild( parent );
                    parent = document.createElement( 'div' )
                    parent.classList.add( 'row' );
                }
                var col = document.createElement( 'div' );
                col.classList.add( 'col-sm-3' );
                var card = document.createElement( 'div' );
                card.classList.add( 'card' );
                card.setAttribute( 'style', 'width: 18rem; text-align: center;' );

                // card image
                var img = document.createElement( 'img' );
                img.classList.add( 'card-img-top' );
                img.setAttribute( 'width', '100px' );
                img.setAttribute( 'src', cur.img );
                img.setAttribute( 'alt', cur.name );
                // add image to the card
                card.appendChild( img );

                // card body
                var body = document.createElement( 'div' );
                body.classList.add( 'card-body' );

                var title = document.createElement( 'h4' );
                title.classList.add( 'item-title' );
                title.innerHTML = cur.name;
                // add title to body
                body.appendChild( title );

                var cate = document.createElement( 'h5' );
                cate.classList.add( 'item-cate' );
                cate.innerHTML = cur.cate;
                // add cate to body
                body.appendChild( cate );

                var year = document.createElement( 'h6' );
                year.classList.add( 'item-year' );
                year.innerHTML = cur.year;
                // add year to body
                body.appendChild( year );

                var price = document.createElement( 'p' );
                price.classList.add( 'item-price' );
                var span = document.createElement( 'span' );
                span.innerHTML = "$" + cur.price + ".00";
                price.appendChild( span );
                // add price to body
                body.appendChild( price );

                var rating = document.createElement( 'div' );
                rating.classList.add( 'star-rating' );

                var p = document.createElement( 'p' );
                p.classList.add( 'item-rating' );
                span = document.createElement( 'span' );
                span.innerHTML = cur.rating;
                p.appendChild( span );
                rating.appendChild( p );

                var ul = document.createElement( 'ul' );
                ul.classList.add( 'list-inline' );
                for( var j = 0; j < 5; j++ )
                {
                    var li = document.createElement( 'li' );
                    li.classList.add( 'list-inline-item' );
                    var icon = document.createElement( 'i' );
                    if( j != 4 )    icon.className += " fa fa-star";
                    else            icon.className += " fa fa-star-o";
                    li.appendChild( icon );
                    ul.appendChild( li );
                }
                rating.appendChild( ul );
                body.appendChild( rating );

                span = document.createElement( 'span' );
                span.classList.add( 'item-sold' );
                span.innerHTML = cur.sold;
                body.appendChild( span );
                
                card.appendChild( body );
                col.appendChild( card );
                parent.appendChild( col );
            }
            // append the last row
            container.appendChild( parent );
        },
        error: function( data )
        {
            console.error( 'Data retrival failed!' );
            console.error( data );
        }
    });
});