import React from 'react';
import Archives from './Archives';
import Spinner from '../../common/Effects/Spinner';

/*
Object Format:-
[
    {
        year: "20XX - 20XX",
        folders : [
            {
                name: "folder_name",
                items: [{
                    name: file_name,
                    link: link_to_file
                }, {
                    name: file_name,
                    link: link_to_file
                }]
            }, 
        ]
    }
]
*/

function convertToArchiveObject(archives) {
    if (archives) {
        const documents = archives.map(archive => {
            const archiveName = archive.year;

            const folders = archive.folders.map(folder => {
                const folderName = folder.name;

                const items = folder.items.map(item => (
                    {
                        name: item.name,
                        link: item.link
                    }
                ));

                return ({
                    name: folderName,
                    items: items
                });
            });

            return ({
                year: archiveName,
                folders: folders
            });
        });

        return documents;
    }
    else {
        return null;
    }
}

function List(props) {
    const archives = convertToArchiveObject(props.data);
    
    return (
        (archives) ? (
            <Archives>
                {archives}
            </Archives>
        ) : (
                <Spinner />
            )
    );
}

export default List;