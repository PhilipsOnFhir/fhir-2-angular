import { R5_DomainResource } from './R5_DomainResource'
import { R5_Linkage_Item } from './R5_Linkage_Item'
import { R5_Reference } from './R5_Reference'

export class R5_Linkage      extends R5_DomainResource
{

   static def : string = 'Linkage';
   active : boolean ;
   author : R5_Reference ;
   item : R5_Linkage_Item [];
}
