import { STU3_Catalog_Document } from './STU3_Catalog_Document'
import { STU3_Catalog_Entry } from './STU3_Catalog_Entry'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_Catalog      extends STU3_DomainResource
{

   static def : string = 'Catalog';
   identifier : STU3_Identifier ;
   document : STU3_Catalog_Document ;
   entry : STU3_Catalog_Entry [];
}
